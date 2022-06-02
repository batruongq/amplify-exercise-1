

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    if (event.requestContext.authorizer) {
        console.log('claims: ', event.requestContext.authorizer.claim);
    }

    console.log(`EVENT: ${JSON.stringify(event)}`);

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify('Hello from Lambda!'),
    };

    return response;
};
