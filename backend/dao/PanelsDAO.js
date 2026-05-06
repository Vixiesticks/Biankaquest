export default class PanelsDAO {
  static panels;

  static async injectDB(conn) {
    if (PanelsDAO.panels) {
      return;
    }
    try {
      PanelsDAO.panels = await conn.db(process.env.BIANKAQUEST_NS).collection('panels');
    } catch (e) {
      console.error(`unable to connect in PanelsDAO: ${e}`);
    }
  }

  //static async getPanels() {
  //  try {
  //    const panelsList = await PanelsDAO.panels;
  //    const totalNumPanels = await PanelsDAO.panels.countDocuments();
  //    return {panelsList, totalNumPanels};
  //  } catch (e) {
  //    console.error(`Unable to issue find command, ${e}`);
  //    return {panelsList: [], totalNumPanels: 0};
  //  }
  //}
  static async getPanels({ //default filter
    //filters = null,
    page = 0,
    panelsPerPage = 20, //get 20 panels at once
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
      cursor = await PanelsDAO.panels
        .find(query)
        .limit(panelsPerPage)
        .skip(panelsPerPage * page);
      const panelsList = await cursor.toArray();
      const totalNumPanels = await PanelsDAO.panels.countDocuments(query);
      return { panelsList, totalNumPanels };
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { panelsList: [], totalNumPanels: 0 };
    }
  }
}