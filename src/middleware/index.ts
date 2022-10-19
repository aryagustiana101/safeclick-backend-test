import type { NextFunction, Request, Response } from 'express'

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error(err)

  return res.status(500).json({
    status: 'Error',
    message: err.message
  })
}

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  return res.status(404).json({
    status: 'Bad Request',
    message: 'Route Not Found'
  })
}

export const asyncWrapper = (
  callback: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch(next)
  }
}

export const acceptCh = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.set('Accept-CH', 'Device-Memory')
  next()
}
