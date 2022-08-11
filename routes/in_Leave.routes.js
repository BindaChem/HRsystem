import { Router } from "express";
import {add_In_Leave} from "../controller/in_Leave.controller.js";
import {read_In_Leave} from "../controller/in_Leave.controller.js";
import {read_in_leave_by_id} from "../controller/in_Leave.controller.js";
import {update_In_Leave} from "../controller/in_Leave.controller.js";

export const router = Router();


router.get('/',read_In_Leave);
router.get('/:in_LeaveId',read_in_leave_by_id);
router.post('/',add_In_Leave);
router.put('/:in_LeaveId',update_In_Leave)