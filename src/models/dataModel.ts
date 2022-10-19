import { Schema, model } from 'mongoose'

const dataSchema = new Schema<IData>(
  {
    cpuname: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false
    },
    platform: {
      type: String,
      required: false
    },
    release: {
      type: String,
      required: false
    },
    remainingRam: {
      type: Number,
      required: false
    },
    totalRam: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Data', dataSchema, 'data')
