const axios = require("axios");

const { GATSBY_API_BASE, GATSBY_API_KEY, GATSBY_API_SECRET } = process.env;

exports.handler = async function (event, context) {
  return axios
    .get(`${GATSBY_API_BASE}/item`, {
      auth: { username: GATSBY_API_KEY, password: GATSBY_API_SECRET },
    })
    .then((res) => {
      return {
        statusCode: 200,
        body: res,
      };
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: err,
      };
    });
};
