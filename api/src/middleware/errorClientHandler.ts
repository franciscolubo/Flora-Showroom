import { NextFunction, Request, Response } from 'express'

export default function errorClientHandler (error: any, _req: Request, res: Response, _next: NextFunction) {
  res.status(error.status).json({
    status: error.status,
    message: error.message
  })
}
