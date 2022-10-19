import express from 'express'
import { asyncWrapper } from '../middleware'
import { getMultiple, create } from '../controllers/dataController'

const router = express.Router()

router.route('/').get(asyncWrapper(getMultiple))
router.route('/').post(asyncWrapper(create))

export default router
