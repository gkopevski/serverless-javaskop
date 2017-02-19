/**
 * Created by gkopevski on 2/18/17 10:33 PM.
 */

'use strict';
var doc = require('dynamodb-doc');
var DynamoDB = new doc.DynamoDB();

module.exports.users = (event, context, callback) => {

  let user = JSON.parse(event.body);
  let response = {
    statusCode: 200,
    body: {},
  };
  let tableName = "users";
  let item = {
    "id": user.id,
    "name": user.name,
    "time": user.time
  };
  let params = {
    TableName: tableName,
    Item: item
  };

  DynamoDB.putItem(params, function (err, data) {
    if (err) {
      response.body = JSON.stringify({ status: 'ERROR: Dynamo failed: ' + err});
      callback(null, response);
    } else {
      console.log('Dynamo Success: ' + JSON.stringify(data, null, '  '));
      response.body = JSON.stringify({ status: "Success" });
      callback(null, response);
    }
  });
};
