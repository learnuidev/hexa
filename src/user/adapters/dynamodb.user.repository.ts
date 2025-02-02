import AWS from "aws-sdk";

import { User, UserRepository } from "../user.domain";

AWS.config.update({ region: "us-east-1" }); // Replace with your desired region

const dynamodb = new AWS.DynamoDB.DocumentClient();

const userTableName = "hexa-users-table";

export const dynamoDBUserRepository = (): UserRepository => {
  const saveUser = async (user: User): Promise<User> => {
    const params = {
      TableName: userTableName,
      Item: user, // Save the user object directly
    };

    await dynamodb.put(params).promise();
    return user;
  };

  const getUser = async (id: string): Promise<User | null> => {
    const params = {
      TableName: userTableName,
      Key: {
        id: id, // Assuming 'id' is the primary key
      },
    };

    const result = await dynamodb.get(params).promise();
    return result.Item ? (result.Item as User) : null;
  };

  const listUsers = async (): Promise<User[]> => {
    const params = {
      TableName: userTableName,
    };

    const result = await dynamodb.scan(params).promise();
    return result.Items ? (result.Items as User[]) : [];
  };

  return {
    saveUser,
    getUser,
    listUsers,
  };
};
