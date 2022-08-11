import {Router} from "express";
import { isAdminMiddleware } from "../middleware/is-admin.middleware.js";
import { validateTokenMiddleware } from "../middleware/jwt.middleware.js";
import {validateEmployeeMiddleware} from "../middleware/employee.middleware.js";
import {createEmployeeController} from "../controller/employee.controller.js";
import{readEmployee} from "../controller/employee.controller.js";
import {readEmployeeId } from "../controller/employee.controller.js";
import {updateEmployeeId, deleteEmployeeId} from "../controller/employee.controller.js";



export const router = Router();

router.get("/",validateTokenMiddleware,readEmployee);

router.get("/:employeeId",validateTokenMiddleware,readEmployeeId );
router.post("/",validateTokenMiddleware,isAdminMiddleware,validateEmployeeMiddleware,createEmployeeController)
router.put("/:employeeId", validateTokenMiddleware, isAdminMiddleware,updateEmployeeId );
router.delete("/:employeeId", validateTokenMiddleware, isAdminMiddleware,deleteEmployeeId );



