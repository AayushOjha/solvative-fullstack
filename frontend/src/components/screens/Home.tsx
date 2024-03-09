import { useEffect, useState } from "react";
import { IUser } from "../../services/interfaces";
import { userApi } from "../../services/api/userApi";
import UserTable from "../UserTable";

type Props = {};

const Home = (props: Props) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userApi.list().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div className="page">
      <a href="/new">
        <button>Create User</button>
      </a>
      <div>{users.length ? <UserTable users={users} /> : <>Loading...</>}</div>
    </div>
  );
};

export { Home };
