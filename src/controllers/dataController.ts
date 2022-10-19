import Data from '../models/dataModel'
import { UAParser } from 'ua-parser-js'
import type { Request, Response } from 'express'

export const getMultiple = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({
    result: await Data.find({})
  })
}

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const uaParsed = new UAParser(req.header('User-Agent')).getResult()

  const data = {
    cpuname:
      req.query.cpuname?.toString() ??
      req.header('cpuname') ??
      uaParsed.cpu.architecture ??
      '',
    type:
      req.query.type?.toString() ??
      req.header('type') ??
      uaParsed.os.name ??
      '',
    platform:
      req.query.platform?.toString() ??
      req.header('platform') ??
      uaParsed.os.name ??
      '',
    release:
      req.query.release?.toString() ??
      req.header('release') ??
      uaParsed.os.version ??
      '',
    remainingRam: Number(
      req.query.remainingRam?.toString() ?? req.header('remainingRam') ?? 0
    ),
    totalRam: Number(
      req.query.totalRam?.toString() ??
        req.header('totalRam') ??
        req.header('Device-Memory') ??
        0
    )
  }

  await Data.create<IData>(data)

  return res.status(201).json(data)
}
