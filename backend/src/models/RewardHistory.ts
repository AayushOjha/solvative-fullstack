import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "./User";

export interface IHistory extends Document {
  points: number;
  given_by: mongoose.Types.ObjectId | IUser;
  given_to: mongoose.Types.ObjectId | IUser;
}

const historySchema: Schema<IHistory> = new mongoose.Schema(
  {
    points: { type: Number, required: true, min: 1 },
    given_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    given_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const RewardHistory = mongoose.model("RewardHistory", historySchema);
export { RewardHistory };
