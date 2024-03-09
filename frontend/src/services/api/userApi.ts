import axios, { AxiosPromise } from "axios";
import { ApiEndpoint } from "../constants";
import { ITransaction, IUser } from "../interfaces";

const create = (name: string) => {
  return axios.post(`${ApiEndpoint}/users`, { name });
};

const fetch = (id: string): AxiosPromise<IUser> => {
  return axios.get(`${ApiEndpoint}/users/${id}`);
};

const list = (): AxiosPromise<{ users: IUser[] }> => {
  return axios.get(`${ApiEndpoint}/users`);
};

const update = (id: string, name: string) => {
  return axios.put(`${ApiEndpoint}/users/${id}`, { name });
};

const fetchP5 = (
  id: string
): AxiosPromise<{ transactions: ITransaction[] }> => {
  return axios.get(`${ApiEndpoint}/users/${id}/p5`);
};

const fetchRewards = (
  id: string
): AxiosPromise<{ transactions: ITransaction[] }> => {
  return axios.get(`${ApiEndpoint}/users/${id}/rewards`);
};

const createReward = (userID: string, points: number, receiverId: string) => {
  return axios.post(`${ApiEndpoint}/users/${userID}/send-points`, {
    points,
    receiverId,
  });
};

const userApi = {
  create,
  fetch,
  list,
  update,
  fetchP5,
  fetchRewards,
  createReward,
};
export { userApi };
