export default class ComicsDAO {
  static comics;

  static async injectDB(conn) {
    if (ComicsDAO.comics) {
      return;
    }
    try {
      ComicsDAO.comics = await conn.db(process.env.BIANKAQUEST_NS).collection('comics');
    } catch (e) {
      console.error(`unable to connect in ComicsDAO: ${e}`);
    }
  }

  //static async getComics() {
  //  try {
  //    const comicsList = await ComicsDAO.comics;
  //    const totalNumComics = await ComicsDAO.comics.countDocuments();
  //    return {comicsList, totalNumComics};
  //  } catch (e) {
  //    console.error(`Unable to issue find command, ${e}`);
  //    return {comicsList: [], totalNumComics: 0};
  //  }
  //}
  static async getComics({ //default filter
    //filters = null,
    page = 0,
    comicsPerPage = 20, //get 20 comics at once
  } = {}) {
    let query;
    //if (filters) {
    //  if ('title' in filters) {
    //    query = { $text: { $search: filters.title } };
    //  } else if ('rated' in filters) {
    //    query = { rated: { $eq: filters.rated } };
    //  }
    //}

    let cursor;
    try {
      cursor = await ComicsDAO.comics
        .find(query)
        .limit(comicsPerPage)
        .skip(comicsPerPage * page);
      const comicsList = await cursor.toArray();
      const totalNumComics = await ComicsDAO.comics.countDocuments(query);
      return { comicsList, totalNumComics };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { comicsList: [], totalNumComics: 0 };
    }
  }
}