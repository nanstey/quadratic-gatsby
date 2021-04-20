const axios = require("axios");

const { GATSBY_API_BASE, GATSBY_API_KEY, GATSBY_API_SECRET } = process.env;

exports.handler = async function (event, context) {
  const { data } = await axios.get(`${GATSBY_API_BASE}/item`, {
    auth: { username: GATSBY_API_KEY, password: GATSBY_API_SECRET },
  });

  return {
    statusCode: 200,
    body: { data, event, context },
  };
};
