import { Request, Response } from 'express';
import BadRequestExeption from '../../exceptions/BadRequest';
import HelloWorld from '../../models/hello/HelloWorld';
import catchError from '../../utils/catchError';

export const helloController = async (req: Request, res: Response) => {
  const helloResult = HelloWorld.getHello();

  res.send(helloResult);
};

export const anotherHelloController = catchError((req: Request, res: Response) => {
  const { message } = req.body;
  if (typeof message !== 'string') throw new BadRequestExeption('message should be string');

  const helloResult = HelloWorld.getAnotherHello(message);
  res.send(helloResult);
});
