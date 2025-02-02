import { dynamoDBUserRepository } from "../user-adapters/dynamodb.user.repository";
import { localFileUserRepository } from "../user-adapters/local-file.user.repository";
import { userService } from "../user.service";

// const userRepository = localFileUserRepository();
const userRepository = dynamoDBUserRepository();

const userServiceInstance = userService(userRepository);

// ts-ignore
export const createUserHandler = async (event: any) => {
  try {
    const { name, email } = JSON.parse(event.body);

    const user = await userServiceInstance.createUser({ name, email });

    const response = {
      statusCode: 200,
      body: JSON.stringify(user),
    };

    return response;
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error creating user",
      }),
    };
    return response;
  }
};

// ts-ignore
export const listUsersHandler = async (event: any) => {
  try {
    const user = await userServiceInstance.listUsers();

    const response = {
      statusCode: 200,
      body: JSON.stringify(user),
    };

    return response;
  } catch (err) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error creating user",
      }),
    };

    return response;
  }
};

// createUserHandler({
//   body: JSON.stringify({
//     name: "John Doe",
//     email: "john@gmail.com",
//   }),
// }).then((user) => {
//   return createUserHandler({
//     body: JSON.stringify({
//       name: "Vishal Gautam",
//       email: "learnuidev@gmail.com",
//     }),
//   }).then(() => {
//     listUsersHandler({}).then((users) => {
//       console.log("USERS", users);
//     });
//   });
// });

listUsersHandler({}).then((users) => {
  console.log("USERS", users);
});
