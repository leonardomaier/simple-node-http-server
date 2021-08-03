export default class Routes {

  constructor() {
    this._routes = [];
  }

  add(route = {}) {
    this._routes.push(route);
    return this;
  }

  list() {
    return this._routes;
  }
};
