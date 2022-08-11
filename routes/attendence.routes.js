import {Router} from "express";
import {checkInAttendence,checkOutAttendence,readAttendence,readAttendenceUid} from "../controller/attendence.controller.js";
import { validateTokenMiddleware} from "../middleware/jwt.middleware.js";
export const router = Router();


router.get('/',validateTokenMiddleware,readAttendence);
router.get('/:attendenceId',validateTokenMiddleware,readAttendenceUid)
router.post('/',checkInAttendence);
router.put('/:attendenceId', checkOutAttendence);

