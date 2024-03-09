import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITransaction } from "../../services/interfaces";
import { userApi } from "../../services/api/userApi";

import { RewardTable } from "../RewardTable";

type Props = {};

const ShowRewards = (props: Props) => {
  const { id } = useParams();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (id) {
      userApi.fetchRewards(id).then(({ data }) => {
        let _total = 0;
        data.transactions.forEach((x) => {
          _total += x.points;
        });
        setTotal(_total);
        setTransactions(data.transactions);
      });
    }
  }, [id]);

  return (
    <div className="page">
      {total ? <div>Total reward: {total}</div> : <></>}
      <div>
        {transactions.length ? (
          <RewardTable transactions={transactions} />
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export { ShowRewards };
