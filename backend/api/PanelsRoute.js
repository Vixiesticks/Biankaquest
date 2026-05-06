export default class PanelsRoute {
  static configRoutes(router) {
    router.route('/').get(PanelController.apiGetPanels);
    return router;
  }
}