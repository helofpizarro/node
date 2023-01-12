import {Router} from 'express'
import { categoriesRoutes } from './categories.routes'
import { specifcationRoutes } from './specifications.routes'

const router = Router()


router.use('/categories',categoriesRoutes)

router.use('/specifications', specifcationRoutes)

export {router}