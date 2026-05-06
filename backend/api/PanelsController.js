import PanelsDAO from "../dao/PanelsDAO.js";

export default class PanelsController {
  static async apiGetPanels(req, res, next) {
    const panelsPerPage = req.query.panelsPerPage ? parseInt(req.query.panelsPerPage) : 20; // what are the ?s for?
    const page = req.query.page ? parseInt(req.query.page) : 0;

    //processes filters
    const filters = {};
    if (req.query.rated) {
      filters.rated = req.query.rated;
    } else if (req.query.title) {
      filters.title = req.query.title;
    }

    //retrieves panels
    const {panelsList, totalNumPanels} = await PanelsDAO.getPanels(
      {filters, page, panelsPerPage},
    );

    const response = {
      panels: panelsList,
      page,
      filters,
      entries_per_page: panelsPerPage,
      total_results: totalNumPanels,
    };
    res.json(response);
  }
}