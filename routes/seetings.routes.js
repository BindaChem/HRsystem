import Router from "express";
import { insertIntoSeetings ,readSeetings,readSeetingsId,updateSeetings,deleteSeetingsId} from "../controller/seeting.controller.js";
export const router = Router();


router.get('/', readSeetings);
router.get('/:seetingsId',readSeetingsId)
router.post('/',insertIntoSeetings);
router.put('/:seetingsId',updateSeetings);
router.delete('/:seetingsId',deleteSeetingsId);