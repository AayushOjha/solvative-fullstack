import axios from "axios";
import { ApiEndpoint } from "../constants";

const deleteTnx = (id: string) => {
  return axios.delete(`${ApiEndpoint}/transactions/${id}`);
};

const transactionApi = { deleteTnx };
export { transactionApi };
