import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ITransaction } from "../../services/interfaces";
import { userApi } from "../../services/api/userApi";
import { TransactionTable } from "../TransactionTable";

type Props = {};

const ShowP5 = (props: Props) => {
  const { id } = useParams();

  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (id) {
      userApi.fetchP5(id).then(({ data }) => {
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
      <a href={`/${id}/rewards/new`}>
        <button>Create New Reward</button>
      </a>
      {total ? <div>P5 left: {100 - total}</div> : <></>}

      <div>
        {transactions.length ? (
          <TransactionTable transactions={transactions} />
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export { ShowP5 };
