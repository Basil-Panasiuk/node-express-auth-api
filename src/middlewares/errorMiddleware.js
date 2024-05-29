import { ApiError } from '../exeptions/apiError.js';

export const errorMiddleware = (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });

    return;
  }

  console.log(error);

  res.status(500).send('Unexpected error');
};
