export default class UserController {

  get(req, res) {
    res.end(JSON.stringify([
      { id: 1, name: "Leonardo"}
    ]));
  }

  post(req, res) {
    res.end(`creating users on ${req.method} ${req.url}`)
  }
}