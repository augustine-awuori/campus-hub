import client from "./client";

const endpoint = "/users";

export interface User {
  avatar?: string;
  email: string;
  name: string;
}

const create = (user: User) => client.post(endpoint, user);

const getAll = () => client.get(endpoint);

export default { create, getAll };
