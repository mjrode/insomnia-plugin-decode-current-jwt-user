const jwtDecode = require('jwt-decode');

module.exports.templateTags = [require('./src/decode-jwt-user')];

async function getHeadersHook(context) {
  try {

    const bearer = await context.request.getEnvironmentVariable('bearer');
    const decodedJwt = jwtDecode(bearer);
    const jwtKeys = Object.keys(decodedJwt)
    await context.store.setItem('jwtKeys', jwtKeys.join())
  } catch (error) {
    console.log('Error', error);
  }
}

module.exports.requestHooks = [getHeadersHook];
