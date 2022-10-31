import { Request, Response, NextFunction } from 'express'

export default function errorRouteHandler (req: Request, res: Response, _next: NextFunction) {
  res.status(404).json({
    status: 404,
    message: `Route ${req.path} not exist`
  })
}
