import { connect } from 'mongoose'

export const connectDB = async (): Promise<void> => {
  const db = await connect(process.env.MONGODB_URI ?? ``)

  console.info(`MongoDB connected: ${db.connection.host}`)
}
