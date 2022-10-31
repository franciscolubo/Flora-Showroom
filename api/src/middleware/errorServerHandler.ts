import { NextFunction, Request, Response } from 'express'

export default function errorServerHandler (error: any, _req: Request, res: Response, next: NextFunction) {
  const statusCode = error.status || 404
  if (!error.error.path) {
    next(error)
  } else {
    console.log('errorServerHandler', error)
    res.status(statusCode).json({
      status: statusCode,
      path: error.error.path,
      name: error.error.name,
      stack: process.env.NODE_ENV === 'development' ? error.error.message : 'Internal error'
    })
  }
}
