import React from "react";
import { IUser } from "../services/interfaces";

type Props = { users: IUser[] };

const UserTable = ({ users }: Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>P5 balance</th>
            <th>Reward balance</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.p5_points}</td>
                <td>{user.reward_points}</td>
                <td>
                  <a href={`/${user._id}`}>
                    <button>Login</button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
