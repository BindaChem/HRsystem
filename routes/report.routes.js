import { Router } from "express";
import { recordRepo } from "../controller/report.controller.js";

const router = Router ();
router.post("/:employeeId", recordRepo);

export default router;

