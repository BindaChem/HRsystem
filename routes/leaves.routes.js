import Router from "express";
import { readLeaves, readleaves1, takeLeave, updateLeaves } from "../controller/leaves.controller.js";
const router = Router();

router.get("/", readLeaves);
router.get("/:leavesId", readleaves1);
router.post("/", takeLeave);
router.put("/:leavesId", updateLeaves);

export default router;