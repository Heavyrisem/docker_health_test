import { Request, Response } from 'express';
import BadRequestExeption from '../exceptions/BadRequest';

const errorHandler = (error: Error, req: Request, res: Response) => {
  if (error instanceof BadRequestExeption) return res.status(400).send('BadRequestExeption');

  return res.status(500).send('Unhandled exceptions');
};

export default errorHandler;
