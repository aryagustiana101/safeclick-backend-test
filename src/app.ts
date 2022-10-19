import cors from 'cors'
import logger from 'morgan'
import index from './routes'
import express from 'express'
import cookieParser from 'cookie-parser'
import { acceptCh, errorHandler, notFoundHandler } from './middleware'

const app = express()

app.use(cors())
app.use(acceptCh)
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.use('/', index)

app.use(errorHandler)
app.use(notFoundHandler)

export default app
