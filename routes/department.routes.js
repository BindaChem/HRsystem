import {Router} from "express";
import {validateDepartment} from "../middleware/validateDepartment.middleware.js";
import {deleteDepartment, departmentController, readDepartment, readDepartment1, updateDepartment} from "../controller/department.controller.js";
const router = Router();

router.get("/",readDepartment );

router.get("/:departmentId", readDepartment1);
router.post("/", validateDepartment, departmentController);
router.put("/:departmentId", updateDepartment);
router.delete("/:department", deleteDepartment);

export default router;