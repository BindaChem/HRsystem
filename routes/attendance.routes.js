import Router from "express";
import {checkInAllAttendance, checkOutAttendance, readAllAttendance, readAttendance } from "../controller/attendance.controller.js";

const router = Router();

router.get("/", readAllAttendance);
router.get("/:employeeId", readAttendance)
router.post("/", checkInAllAttendance);
router.put("/:attendanceId", checkOutAttendance);

export default router;
