import { CreateUserParams, User, UserRepository } from "./user.domain";
import crypto from "crypto";

export const userService = (userRepository: UserRepository) => {
  const createUser = ({ name, email }: CreateUserParams): Promise<User> => {
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
    };

    return userRepository.saveUser(user);
  };

  const listUsers = async (): Promise<User[]> => {
    return userRepository.listUsers();
  };

  return {
    createUser,
    listUsers,
  };
};
