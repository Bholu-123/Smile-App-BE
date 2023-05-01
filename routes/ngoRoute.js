import { Router } from "express";
const router = Router();
import {
  addNgos,
  editNgo,
  getAllNgos,
  getNgosByCategory,
  getNgosByUser,
  getNgosId,
} from "../controllers/ngoController.js";
import protectNgo from "../middleware/ngoAuthMiddleWare.js";

router.route("/addNgos").post(protectNgo, addNgos);
router.route("/getAllNgos").get(protectNgo, getAllNgos);
router.route("/getById/:ngosId").get(protectNgo, getNgosId);
router.route("/getByCategory/:catId").get(protectNgo, getNgosByCategory);
router.route("/getByUser/:userId").get(protectNgo, getNgosByUser);
router.route("/editNgo/:ngosId").put(protectNgo, editNgo);

export default router;
