import { Router } from "express";
const router = Router()

import { register, login, refresh, logout } 
  from "../controllers/authController.js";

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/refresh').get(refresh)
router.route('/logout').post(logout)

export default router
