import express from "express";
import { create, get, getAll, remove, update } from "../cotrollers/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categoryes", getAll);
router.get("/categoryes/:id", get);
router.post("/categoryes", checkPermission, create);
router.delete("/categoryes/:id", checkPermission, remove);
router.patch("/categoryes/:id", checkPermission, update);

export default router;