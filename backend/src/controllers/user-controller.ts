import { RewardHistory } from "../models/RewardHistory";
import { User } from "../models/User";
import { getUserBalance } from "../utils/helpers/getUserBalance";
import { ControllerFunction } from "../utils/interfaces/common";

const index: ControllerFunction = async (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      if (user) {
        getUserBalance(user._id)
          .then(({ p5_points, reward_points }) => {
            res.send({
              _id: user._id,
              name: user.name,
              p5_points,
              reward_points,
            });
          })
          .catch((err) => {
            res.status(400).json({ err });
          });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const list: ControllerFunction = async (req, res) => {
  User.find({})
    .then((users) => {
      Promise.all(users.map((user) => getUserBalance(user._id))).then(
        (balanceArr) => {
          const result = users.map((user, index) => ({
            _id: user._id,
            name: user.name,
            p5_points: balanceArr[index].p5_points,
            reward_points: balanceArr[index].reward_points,
          }));
          res.send({ users: result });
        }
      );
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};
const create: ControllerFunction = async (req, res) => {
  const { name } = req.body;
  User.create({ name })
    .then(() => {
      res.send("user created successfully");
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
const update: ControllerFunction = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  User.updateOne({ _id: id }, { $set: { name } })
    .then(() => {
      res.send("user updated successfully");
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const fetchP5: ControllerFunction = async (req, res) => {
  const id = req.params.id;
  RewardHistory.find({ given_by: id })
    .populate({ path: "given_by" })
    .populate({ path: "given_to" })
    .then((transactions) => {
      res.json({ transactions });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const fetchRewards: ControllerFunction = async (req, res) => {
  const id = req.params.id;
  RewardHistory.find({ given_to: id })
    .populate({ path: "given_by" })
    .populate({ path: "given_to" })
    .then((transactions) => {
      res.json({ transactions });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

const userController = { create, update, list, index, fetchP5, fetchRewards };

export { userController };
