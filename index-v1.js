const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1'
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. create and organization
// const orgID = uuidv4();

// var params = {
//   TableName: 'happy-projects',
//   Item: {
//     PK: `ORG#${orgID}`,
//     SK: `#METADATA#${orgID}`,
//     name: 'ABC Inc.',
//     tier: 'professional'
//   },
//   ReturnValues: 'ALL_OLD'
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 2. create an fixed-bid project in Happy Inc.
// const abcIncOrgId = '9e520bc8-70f0-46a0-9351-120b23637333';
// const projectID = uuidv4();

// var params = {
//   TableName: 'happy-projects',
//   Item: {
//     PK: `ORG#${abcIncOrgId}`,
//     SK: `PRO#fixed-bid#${abcIncOrgId}`,
//     name: 'Project F1',
//     project_id: projectID
//   },
//   ReturnValues: 'ALL_OLD'
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 3. Edit an Organization
// const abcIncOrgId = '9e520bc8-70f0-46a0-9351-120b23637333';

// var params = {
//   TableName: 'happy-projects',
//   Key: { PK: `ORG#${abcIncOrgId}`, SK: `#METADATA#${abcIncOrgId}` },
//   UpdateExpression: 'set #org_id = :org_id',
//   ExpressionAttributeNames: { '#org_id': 'org_id' },
//   ExpressionAttributeValues: {
//     ':org_id': abcIncOrgId
//   }
// };

// dynamodb.update(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 4. Find an Organization
// const orgID = '7186b7cd-ef38-41c9-901e-4f759db54a05';

// var params = {
//   TableName: 'happy-projects',
//   Key: {
//     PK: `ORG#${orgID}`,
//     SK: `#METADATA#${orgID}`
//   }
// };

// dynamodb.get(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 4. Find all project of Happy Inc.
// const orgID = '7186b7cd-ef38-41c9-901e-4f759db54a05';

// var params = {
//   TableName: 'happy-projects',
//   KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
//   ExpressionAttributeNames: {
//     '#PK': 'PK',
//     '#SK': 'SK'
//   },
//   ExpressionAttributeValues: {
//     ':PK': `ORG#${orgID}`,
//     ':SK': 'PRO#'
//   }
// };

// dynamodb.query(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });
