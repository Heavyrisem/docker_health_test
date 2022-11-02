import express from 'express';
import Config from './modules/Config';
import helloRouter from './router/hello';
import errorHandler from './utils/errorHandler';

const { PORT } = Config.env;

const app = express();
app.use(express.json());

app.use(helloRouter);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log('express listening on', PORT);
});
