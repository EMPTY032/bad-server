import { Router } from 'express'
import {
    getCurrentUser,
    getCurrentUserRoles,
    login,
    logout,
    refreshAccessToken,
    register,
    updateCurrentUser,
} from '../controllers/auth'
import auth, { roleGuardMiddleware } from '../middlewares/auth'
import {
    validateLogin,
    validateRegister,
    validateUpdateUser,
} from '../utils/validate'
import { Role } from '../models/user'

const authRouter = Router()

authRouter.get('/user', roleGuardMiddleware(Role.Admin), auth, getCurrentUser)
authRouter.patch('/me', validateUpdateUser, auth, updateCurrentUser)
authRouter.get('/user/roles', auth, getCurrentUserRoles)
authRouter.post('/login', validateLogin, login)
authRouter.get('/token', refreshAccessToken)
authRouter.get('/logout', logout)
authRouter.post('/register', validateRegister, register)

export default authRouter
