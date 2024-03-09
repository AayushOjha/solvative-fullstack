import { useState } from "react";
import { userApi } from "../services/api/userApi";
import { useNavigate } from "react-router-dom";

type Props = {
  type: "create" | "update";
  name?: string;
  id?: string;
};

const UserForm = (props: Props) => {
  const navigate = useNavigate();

  const [name, setName] = useState(props.name || "");

  const handleSave = () => {
    if (props.type === "create") {
      userApi
        .create(name)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      if (props.id) {
        userApi
          .update(props.id, name)
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter user name"
        value={name}
        onChange={({ target: { value } }) => {
          setName(value);
        }}
        required
      />
      <div>
        <button onClick={handleSave}>Save</button>
        <a href="/">
          <button>Cancel </button>
        </a>
      </div>
    </div>
  );
};

export { UserForm };
