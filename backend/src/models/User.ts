import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export { User };
