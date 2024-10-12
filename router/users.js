import { Router } from "express";
import { allUser, userByRole } from '../controllers/users/read.js'

const router = Router()

router.get('/all', allUser)
router.get('/role/:id', userByRole)

export default router