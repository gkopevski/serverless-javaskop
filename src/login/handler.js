'use strict';

module.exports.login = (event, context, callback) => {
  let allowed = false;
  if (event.queryStringParameters.pass === 'kopecar123') {
    allowed = true;
  }
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,OPTIONS',
    },
    body: JSON.stringify({
      message: 'Good login',
      allowed: allowed,
      input: event,
    }),
  };
  callback(null, response);
};
