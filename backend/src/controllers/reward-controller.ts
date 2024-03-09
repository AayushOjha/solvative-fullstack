import { RewardHistory } from "../models/RewardHistory";
import { User } from "../models/User";
import { getUserBalance } from "../utils/helpers/getUserBalance";
import { ControllerFunction } from "../utils/interfaces/common";

const addTraction: ControllerFunction = (req, res) => {
  const userId = req.params.id;
  const { points, receiverId } = req.body;

  getUserBalance(userId).then(({ p5_points }) => {
    console.log(p5_points);
    if (p5_points >= points) {
      RewardHistory.create({ given_by: userId, points, given_to: receiverId })
        .then(() => {
          res.send("transaction completed!");
        })
        .catch((err) => {
          res.status(400).json({ err });
        });
    } else {
      res.status(400).send("not enough p5 points");
    }
  });
};

const deleteTnx: ControllerFunction = (req, res) => {
  const id = req.params.id;

  RewardHistory.deleteOne({ _id: id })
    .then(() => {
      res.send("transaction deleted!");
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const rewardController = { addTraction, deleteTnx };
export { rewardController };
