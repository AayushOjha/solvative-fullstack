import express from "express";
import { userController } from "./controllers/user-controller";
import { rewardController } from "./controllers/reward-controller";

const router = express.Router();

router.get("/users/:id", userController.index);
router.get("/users", userController.list);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.post("/users/:id/send-points", rewardController.addTraction);

export { router };
