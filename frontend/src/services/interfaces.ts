interface timestamps {
  createdAt: string;
  updatedAt: string;
}
export interface IUser extends timestamps {
  _id: string;
  name: string;
  p5_points: number;
  reward_points: number;
}

export interface ITransaction extends timestamps {
  _id: string;
  points: number;
  given_by: { name: string; _id: string };
  given_to: { name: string; _id: string };
}
