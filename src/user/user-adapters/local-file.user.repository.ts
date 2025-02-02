import { User, UserRepository } from "../user.domain";

let users: User[] = [];

export const localFileUserRepository = (): UserRepository => {
  const saveUser = async (user: User): Promise<User> => {
    users.push(user);

    return user;
  };

  const getUser = async (id: string) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
      return null;
    }

    return user;
  };

  const listUsers = async () => {
    return users;
  };

  return {
    saveUser,
    getUser,
    listUsers,
  };
};
