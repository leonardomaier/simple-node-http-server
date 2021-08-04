import Server from '../core/server.js';
import userRoutes from './routes/user.routes.js';

const server = new Server('localhost', 4321);

server.forRoutes(userRoutes.list());

server.start();