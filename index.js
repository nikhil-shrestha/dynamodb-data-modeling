const uuidv4 = require('uuid/v4');
var AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1'
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

// GSI Query
const happyIncID = '7186b7cd-ef38-41c9-901e-4f759db54a05';

var params = {
  TableName: 'happy-projects',
  IndexName: 'Filter-By-Name-Index',
  KeyConditionExpression: '#PK = :PK and begins_with(#SK, :SK)',
  ExpressionAttributeNames: {
    '#PK': 'PK',
    '#SK': 'Data'
  },
  ExpressionAttributeValues: {
    ':PK': `ORG#${happyIncID}`,
    ':SK': 'PRO#Project X'
  }
};

dynamodb.query(params, function(err, data) {
  if (err) console.log(err);
  else console.log(data);
});
