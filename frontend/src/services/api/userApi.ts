import axios, { AxiosPromise } from "axios";
import { ApiEndpoint } from "../constants";
import { IUser } from "../interfaces";

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

const userApi = { create, fetch, list, update };
export { userApi };
