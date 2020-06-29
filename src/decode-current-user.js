
const jwtDecode = require('jwt-decode');
const jq = require('jsonpath')

function matchJSONPath(body, query) {
  let results;

  // try {
  //   body = JSON.parse(bodyStr);
  // } catch (err) {
  //   throw new Error(`Invalid JSON: ${err.message}`);
  // }

  try {
    results = jq.query(body, query);
  } catch (err) {
    throw new Error(`Invalid JSONPath query: ${query}`);
  }

  if (results.length === 0) {
    throw new Error(`Returned no results: ${query}`);
  } else if (results.length > 1) {
    throw new Error(`Returned more than one result: ${query}`);
  }

  if (typeof results[0] !== 'string') {
    return JSON.stringify(results[0]);
  } else {
    return results[0];
  }
}

function decodedUserKeys(args) {
  console.log('Args', args)
  const jwt = args[0].value
  try {
    const decodedJwt = jwtDecode(jwt);
    const keys = Object.keys(decodedJwt)
    console.log('Keys', keys)
    return keys
  } catch (error) {
    return false
  }
}

module.exports = {
  name: 'decode',
  displayName: 'Decode JWT User',
  description: 'Decode JWT bearer token and reference values',
  args: [
    {
      displayName: 'Token',
      type: 'string',
      defaultValue: '{{bearer}}'
    },
    {
      displayName: 'Filter',
      type: 'string',
      encoding: 'base64',
    },
    {
      displayName: 'Return User Id',
      type: 'boolean',
      help: 'Parse and return the users uuid.',
      defaultValue: false,
    }
  ],

  async run(context, jwt, filter, userId) {
    filter = filter || '';
    const sanitizedFilter = filter.trim();

    const decodedJwt = jwtDecode(jwt);

    const userProfile = decodedJwt[Object.keys(res)[0]]
    if (userId) {
      return userProfile.person_id
    }


    if (sanitizedFilter.indexOf('$') === 0) {
      return matchJSONPath(decodedJwt, sanitizedFilter);
    }

    return userProfile
  },
};


