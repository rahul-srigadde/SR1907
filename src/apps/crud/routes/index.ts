import { Router } from 'express'
import { deleteUser, fetchAllUsers, fetchUser, saveUser } from '../handlers/user'

export const UserRouter: Router = Router()

UserRouter.get('/users', fetchAllUsers)
UserRouter.get('/user/:id', fetchUser)
UserRouter.post('/user', saveUser)
UserRouter.delete('/user/:id', deleteUser)