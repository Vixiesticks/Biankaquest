import ComicsController from "./ComicsController.js";

export default class ComicsRoute {
  static configRoutes(router) {
    console.log("set up route 1");
    router.route('/').get(ComicsController.apiGetComics);
    return router;
  }
}