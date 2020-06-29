async function getHeadersHook(context) {
  try {
    const auth = await context.request.getHeader('Authorization');
    console.log('getHeadersHook -> auth', auth);
    const bearer = await context.request.getEnvironmentVariable('bearer');
    console.log('getHeadersHook -> bearer', bearer);
  } catch (error) {
    console.log('Error', error);
  }
}

module.export = getHeadersHook;
