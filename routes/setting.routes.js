import Router from "express";
import { insertIntoSettings ,readSettings,readSettingsId,updateSettings,deleteSettingsId} from "../controller/setting.controller.js";
export const router = Router();


router.get('/', readSettings);
router.get('/:settingsId',readSettingsId)
router.post('/',insertIntoSettings);
router.put('/:settingsId',updateSettings);
router.delete('/:settingsId',deleteSettingsId);

export default router;