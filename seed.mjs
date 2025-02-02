import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

// Create a DynamoDB service object
const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "hexa-users-table", // Replace with your table name
  KeySchema: [
    { AttributeName: "id", KeyType: "HASH" }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S" }, // 'S' for String
  ],

  BillingMode: "PAY_PER_REQUEST", // On-demand billing mode
};

dynamodb.createTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
