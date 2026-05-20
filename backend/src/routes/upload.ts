import { Router } from 'express'
import { uploadFile } from '../controllers/upload'
import fileMiddleware from '../middlewares/file'
import { v4 as uuidv4 } from 'uuid'
const uploadRouter = Router()
uploadRouter.post('/', fileMiddleware.single('file'), uploadFile)

export default uploadRouter
