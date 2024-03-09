import React from "react";
import { UserForm } from "../UserForm";

type Props = {};

const New = (props: Props) => {
  return (
    <div className="page">
      <h1>Create new user</h1>
      <UserForm type="create" />
    </div>
  );
};

export { New };
