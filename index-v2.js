const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1'
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. create Employee
// const happyIncID = '7186b7cd-ef38-41c9-901e-4f759db54a05';
// const empID = uuidv4();

// var params = {
//   TableName: 'happy-projects',
//   Item: {
//     PK: `ORG#${happyIncID}`,
//     SK: `EMP#${empID}`,
//     name: 'Jane Doe',
//     tier: 'jane.doe@gmail.com'
//   },
//   ReturnValues: 'ALL_OLD'
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 2. Assign an Employee to a Project
// const happyIncID = '7186b7cd-ef38-41c9-901e-4f759db54a05';
// const projectX = '18890ffd-fc95-4564-b2d1-5a942cd8a461';
// const projectY = '67c023af-1127-408d-8bb4-5f8ffaa53e71';
// const projectF1 = 'd8ba0427-693a-4436-9d82-4c132e332b0f';

// const nikhil = '169b0a6f-ab7f-4f28-a5a9-81e109ff4af1';
// const john = '8dfb9efa-3d63-4971-8532-cac7b084943d';
// const jane = '7f09f4d9-3494-4994-9caf-db2ec3a3b6c0';

// // assign Employee to projectA of Happy Inc.
// var params = {
//   TableName: 'happy-projects',
//   Item: {
//     PK: `ORG#${happyIncID}#PRO#${projectY}`,
//     SK: `ORG#${happyIncID}#EMP#${jane}`,
//     name: 'Jane',
//     project: 'Project Y',
//     date_of_join: new Date().toUTCString()
//   },
//   ReturnValues: 'ALL_OLD'
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 3. Find employee assigned to projectX of Happy Inc.
// const happyIncID = '7186b7cd-ef38-41c9-901e-4f759db54a05';
// const projectX = '18890ffd-fc95-4564-b2d1-5a942cd8a461';

// var params = {
//   TableName: 'happy-projects',
//   KeyConditionExpression: '#PK = :PK',
//   ExpressionAttributeNames: {
//     '#PK': 'PK'
//   },
//   ExpressionAttributeValues: {
//     ':PK': `ORG#${happyIncID}#PRO#${projectX}`
//   }
// };

// dynamodb.query(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 4. Find employee assigned to projectX of Happy Inc.
const happyIncID = '7186b7cd-ef38-41c9-901e-4f759db54a05';
const nikhil = '169b0a6f-ab7f-4f28-a5a9-81e109ff4af1';

var params = {
  TableName: 'happy-projects',
  IndexName: 'Project-Employee-index',
  KeyConditionExpression: '#SK = :SK',
  ExpressionAttributeNames: { '#SK': 'SK' }, // since we have inverted SK and PK
  ExpressionAttributeValues: {
    ':SK': `ORG#${happyIncID}#EMP#${nikhil}`
  }
};

dynamodb.query(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
