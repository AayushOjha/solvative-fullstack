import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../services/interfaces";
import { userApi } from "../../services/api/userApi";

type Props = {};

const CreateReward = (props: Props) => {
  const navigation = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();
  const [userList, setUserList] = useState<IUser[]>([]);
  const [points, setPoints] = useState(1);
  const [receiver, setreceiver] = useState<string>();

  useEffect(() => {
    userApi.list().then(({ data }) => {
      const list = data.users.filter((user) => user._id !== id);
      setUserList(list);
      setreceiver(list[0]._id);
    });
  }, []);

  useEffect(() => {
    if (id) {
      userApi.fetch(id).then(({ data }) => {
        setUser(data);
      });
    }
  }, [id]);

  return (
    <div className="page">
      <div className="reward-flex-box">
        <select
          name="receiver"
          value={receiver}
          onChange={({ target: { value } }) => {
            console.log(`in here with`, value);
            setreceiver(value);
          }}
        >
          {userList.map((user) => (
            <option value={user._id}>{user.name}</option>
          ))}
        </select>
        <div>
          <input
            type="number"
            max={100}
            min={1}
            placeholder="points"
            value={points}
            onChange={({ target: { value } }) => {
              if (
                typeof parseInt(value) == "number" &&
                parseInt(value) > 0 &&
                parseInt(value) <= 100
              ) {
                setPoints(parseInt(value));
              } else {
                alert("invalid points");
              }
            }}
          />
          <div>balance: {user?.p5_points}</div>
        </div>
      </div>
      <button
        disabled={user ? false : true}
        onClick={() => {
          if (user && points && receiver) {
            userApi
              .createReward(user._id, points, receiver)
              .then(() => {
                navigation("back");
              })
              .catch((err) => {
                console.error(err);
                alert(JSON.stringify(err));
              });
          } else {
            console.log(points);
            console.log(receiver);

            alert("invalid values");
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export { CreateReward };
