'use strict';

module.exports.login = (event, context, callback) => {
  let allowed = false;
  if (event.queryStringParameters.pass === 'kopecar123') {
    allowed = true;
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Good login',
      allowed: allowed,
      input: event,
    }),
  };
  callback(null, response);
};
