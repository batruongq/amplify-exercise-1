const { APP_1_CLIENT_ID, APP_2_CLIENT_ID } = process.env;

const autoVerifyEmail = event => {
  event.response.autoConfirmUser = true;
  event.response.autoVerifyEmail = true;

  return event;
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  const clientId = event.callerContext.clientId;
  
  if (clientId === APP_1_CLIENT_ID) {
    autoVerifyEmail(event);
  }

  return event;
};
