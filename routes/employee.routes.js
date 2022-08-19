import {Router} from "express";
import { deleteEmployee, employeeController, readEmployee, readEmployee1, updateEmployee } from "../controller/employee.controller.js";
import { isAdminMiddleware } from "../middleware/is-admin.middleware.js";
import { validateTokenMiddleware } from "../middleware/jwt.middleware.js";
import { validateEmployee } from "../middleware/validate-employee.middleware.js";
export const router = Router();

router.get("/",readEmployee);

router.get("/:employeeId", readEmployee1);
router.post("/", isAdminMiddleware, validateEmployee, employeeController )
router.put("/:employeeId", validateTokenMiddleware, isAdminMiddleware, updateEmployee);
router.delete("/:employeeId", validateTokenMiddleware, isAdminMiddleware, deleteEmployee);

export default router;