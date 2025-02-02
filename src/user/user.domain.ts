export interface CreateUserParams {
  name: string;
  email: string;
}

export type User = CreateUserParams & {
  id: string;
};

export interface UserRepository {
  saveUser(user: User): Promise<User>;
  listUsers(): Promise<User[]>;
  getUser(userId: string): Promise<User | null>;
}
