import Routes from "../core/routes.js";
import UserController from '../controllers/user.controller.js';

const userController = new UserController();

const routes = new Routes();

routes
  .add({
    method: 'GET',
    url: '/users',
    execute: userController.get
  })
  .add({
    method: 'POST',
    url: '/users',
    execute: userController.post
  });

export default routes;