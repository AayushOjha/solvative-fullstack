import { RewardHistory } from "../models/RewardHistory";
import { ControllerFunction } from "../utils/interfaces/common";

const addTraction: ControllerFunction = (req, res) => {
  const userId = req.params.id;
  const { points, receiverId } = req.body;

  RewardHistory.create({ given_by: userId, points, given_to: receiverId })
    .then(() => {
      res.send("transaction completed!");
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const rewardController = { addTraction };
export { rewardController };
