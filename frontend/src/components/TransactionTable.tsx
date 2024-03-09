import moment from "moment";
import { ITransaction } from "../services/interfaces";
import { DateTimeFormat } from "../services/constants";
import { transactionApi } from "../services/api/transactionApi";
import { useNavigate } from "react-router-dom";

type Props = {
  transactions: ITransaction[];
};

const TransactionTable = ({ transactions }: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date Time</th>
            <th>P5 given</th>
            <th>User Name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tnx, index) => {
            return (
              <tr key={tnx._id}>
                <td>{index + 1}</td>
                <td>{moment(tnx.createdAt).format(DateTimeFormat)}</td>
                <td>{tnx.points}</td>
                <td>{tnx.given_to.name}</td>
                <td>
                  <button
                    onClick={() => {
                      transactionApi
                        .deleteTnx(tnx._id)
                        .then((result) => {
                          navigate("/");
                        })
                        .catch((error) => {
                          console.error(error);
                        });
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { TransactionTable };
