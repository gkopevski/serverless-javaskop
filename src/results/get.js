/**
 * Created by gkopevski on 2/18/17 10:33 PM.
 */
'use strict';

const AWS = require('aws-sdk');
const DynamoDB = new AWS.DynamoDB();

module.exports.list = (event, context, callback) => {
  let users = [];
  let response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,OPTIONS',
    },
    body: {
      users: users,
    },
  };

  DynamoDB.scan({
    TableName: 'users',
  }, (err, data) => {
    if (err) {
      response.body = JSON.stringify({
        users: 'error occurred while trying to fetch users',
        error: err,
      });
      callback(null, response);
    } else {
      response.body = JSON.stringify({ users: data });
      callback(null, response);
    }
  });
};
