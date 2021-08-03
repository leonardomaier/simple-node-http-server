
import http from 'http';

export default class Server {
  
  constructor(host = '127.0.0.1', port = 3000) {
    this._host = host;
    this._port = port;
    this._server = null;
    this._routes = [];
  }

  handleRequest = (req, res) => {
    
    const { url, method } = req;
    
    let route = this._routes.find(route => route.url === url && route.method === method);

    console.log({
      url: url,
      method: method,
      routes: this._routes,
      found: route
    });

    if (!route) {
      res.end(`Cannot ${method} ${url}`);
      return;
    }

    route.execute(req, res);
  }

  forRoutes(routes) {
    this._routes = routes;
    return this;
  }

  afterStart(fn) {
    return fn || (() => {
      console.log(`Server running at ${this._host}:${this._port}`)
    });
  }

  start() {
    this._server = http
      .createServer(this.handleRequest)
      .listen(this._port, this._host, this.afterStart());
  }
}