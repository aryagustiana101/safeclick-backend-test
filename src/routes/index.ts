import express from 'express'
import data from './dataRoute'

const router = express.Router()

router.route('/').get((req, res) =>
  res.status(200).json({
    message: 'SafeClick BackEnd Intern Task'
  })
)

router.use('/data', data)

export default router
