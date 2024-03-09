import moment from "moment";
import { DateTimeFormat } from "../services/constants";
import { ITransaction } from "../services/interfaces";

type Props = {
  transactions: ITransaction[];
};

const RewardTable = ({ transactions }: Props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date Time</th>
            <th>Rewards received</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tnx, index) => {
            return (
              <tr key={tnx._id}>
                <td>{index + 1}</td>
                <td>{moment(tnx.createdAt).format(DateTimeFormat)}</td>
                <td>{tnx.points}</td>
                <td>{tnx.given_by.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { RewardTable };
