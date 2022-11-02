import express from 'express';
import { anotherHelloController, helloController } from '../../controllers/hello';

const helloRouter = express.Router();

helloRouter.route('/').all(helloController);
helloRouter.route('/another').all(anotherHelloController);

export default helloRouter;
