import { NextFunction, Request, Response } from 'express'

export default function (error: any, _req: Request, res: Response, next: NextFunction) {
  const statusCode = error.message.status || 404
  console.log(error.status)
  if (error.status === 'FAILED') next(error)

  res.status(statusCode).json({
    status: error.status,
    path: error.message.message.path,
    name: error.message.message.name,
    stack: process.env.NODE_ENV === 'development' ? error.message.message.message : 'Internal error'
  })
}
