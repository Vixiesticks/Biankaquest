import ComicsDAO from "../dao/ComicsDAO.js";

export default class ComicsController {
  static async apiGetComics(req, res, next) {
    const comicsPerPage = req.query.comicsPerPage ? parseInt(req.query.comicsPerPage) : 20; // what are the ?s for?
    const page = req.query.page ? parseInt(req.query.page) : 0;

    //processes filters
    //const filters = {};
    //if (req.query.rated) {
    //  filters.rated = req.query.rated;
    //} else if (req.query.title) {
    //  filters.title = req.query.title;
    //}

    //retrieves comics
    const {comicsList, totalNumComics} = await ComicsDAO.getComics(
      {},
    );

    const response = {
      comics: comicsList,
      page,
      entries_per_page: comicsPerPage,
      total_results: totalNumComics,
    };
    res.json(response);
  }
}