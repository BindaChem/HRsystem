import {Router} from "express";
import {loginController} from "../controller/login.controller.js";
import { registerController } from "../controller/register.controller.js";
import {createTokenMiddleware} from "../middleware/jwt.middleware.js";
import { validateRegister } from "../middleware/validate.register.middleware.js";
import { validatelogin } from "../middleware/validate.login.middleware.js";
import {logOut} from "../controller/logout.controller.js";

export const router = Router();

router.post('/login', validatelogin, createTokenMiddleware, loginController);
router.post('/register', validateRegister, registerController);
router.post('/logout',logOut);