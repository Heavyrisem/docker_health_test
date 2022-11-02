import express from 'express';
import Config from './module/Config';

const { PORT } = Config.env;

const app = express();

app.listen(PORT, () => {
  console.log('express listening on', PORT);
});
