import 'dotenv/config'
import http from 'http'
import app from '../src/app'
import debugLib from 'debug'
import { connectDB } from '../src/config/db'

const port = normalizePort(process.env.PORT ?? '3000')

app.set('port', port)

const server = http.createServer(app)
const debug = debugLib('devcode-backend-test:server')

connectDB()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .then(() => {})
  .finally(() => {})

server.listen(port, () => {
  console.info(
    `App (${process.env.BASE_URL ?? ''}) listening on port ${port.toString()}`
  )
})

server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val: string): number | string | boolean {
  const port = parseInt(val, 10)

  if (isNaN(port)) return val

  if (port >= 0) return port

  return false
}

function onError(error: { syscall: string; code: unknown }): void {
  if (error.syscall !== 'listen') throw new Error(error.syscall)

  const bind =
    typeof port === 'string'
      ? `Pipe  ${port.toString()}`
      : `Port ${port.toString()}`

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw new Error(error.syscall)
  }
}

function onListening(): void {
  const addr = server.address()
  const bind =
    typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port ?? ''}`

  debug(`Listening on ${bind}`)
}
