import { Router } from "express";
import {insertRoles} from "../controller/roles.controller.js";
import {readRoles} from "../controller/roles.controller.js";
import {readRolesId} from "../controller/roles.controller.js";
import {updateRoles} from "../controller/roles.controller.js";
import {deleteRolesId} from "../controller/roles.controller.js";


export const router = Router();

router.get('/',readRoles);
router.get('/:rolesId',readRolesId)
router.post('/',insertRoles);
router.put('/:rolesId',updateRoles);
router.delete('/:rolesId',deleteRolesId)


