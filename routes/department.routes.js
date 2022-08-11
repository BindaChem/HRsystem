import {Router} from "express";
import {validateDepartment} from "../middleware/department.middleware.js";
import { readDepartment,departmentController, readDepartmentId,updateDepartmentId,deleteDepartmentId} from "../controller/department.controller.js";

export const router = Router();

router.get("/",readDepartment );

router.get("/:departmentId", readDepartmentId);
router.post("/", validateDepartment, departmentController);
router.put("/:departmentId", updateDepartmentId);
router.delete("/:departmentId", deleteDepartmentId);

