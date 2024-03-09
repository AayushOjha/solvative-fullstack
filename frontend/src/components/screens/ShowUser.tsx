import { useParams } from "react-router-dom";
import { UserForm } from "../UserForm";
import { IUser } from "../../services/interfaces";
import { useEffect, useState } from "react";
import { userApi } from "../../services/api/userApi";

const ShowUser = () => {
  const { id } = useParams();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (id) {
      userApi.fetch(id).then(({ data }) => {
        setUser(data);
      });
    }
  }, [id]);

  return (
    <div className="page">
      {user ? (
        <>
          <UserForm type="update" name={user.name} id={user._id} />
          <div>
            <a href={`/${user._id}/p5`}>
              <button>P5 balance: {user.p5_points}</button>
            </a>
            <a href={`/${user._id}/reward`}>
              <button>Reward balance: {user.reward_points}</button>
            </a>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { ShowUser };
