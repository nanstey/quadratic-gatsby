const axios = require("axios");

const { GATSBY_API_BASE, GATSBY_API_KEY, GATSBY_API_SECRET } = process.env;

exports.handler = async function (event, context) {
  const endpoint = event.queryStringParameters.route;
  delete event.queryStringParameters.route;

  if (!endpoint) {
    return {
      statusCode: 400,
      body: "You must provide a route in the query parameters",
    };
  }

  const { data } = await axios.get(`${GATSBY_API_BASE}/${endpoint}`, {
    auth: { username: GATSBY_API_KEY, password: GATSBY_API_SECRET },
    params: event.queryStringParameters,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
