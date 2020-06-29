const jwtDecode = require('jwt-decode');

module.exports.templateTags = [require('./src/decode-jwt-user')];

// async function getHeadersHook(context) {
//   try {
//     console.log('I am here!');
//     console.log(
//       'getHeadersHook -> decodedJwt',
//       JSON.stringify(context, null, 1)
//     );
//     const auth = await context.request.getAuthentication();
//     console.log('getHeadersHook -> auth', auth);
//     const bearer = await context.request.getEnvironmentVariable('bearer');
//     const decodedJwt = jwtDecode(bearer);
//     console.log(
//       'getHeadersHook -> decodedJwt',
//       JSON.stringify(decodedJwt, null, 1)
//     );
//   } catch (error) {
//     console.log('Error', error);
//   }
// }

// module.exports.requestHooks = [getHeadersHook];
