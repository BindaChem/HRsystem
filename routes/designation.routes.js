import { Router } from "express";
import {insertDesignation} from "../controller/designation.controller.js";
import {readDesignation} from "../controller/designation.controller.js";
import {readADesignationId} from "../controller/designation.controller.js";
import {updateDesignation} from "../controller/designation.controller.js";
import {deleteDesignationId} from "../controller/designation.controller.js";

export const router = Router();


router.get('/',readDesignation);
router.get('/:desingnationId',readADesignationId);
router.post('/',insertDesignation);
router.put('/:designationId',updateDesignation);
router.delete('/:designationId',deleteDesignationId);