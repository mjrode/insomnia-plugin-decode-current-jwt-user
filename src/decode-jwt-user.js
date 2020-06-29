
const jwtDecode = require('jwt-decode');


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
      displayName: 'Parse and return person_id',
      type: 'boolean',
      help: 'Parse and return the users uuid.',
      defaultValue: false,
    }
  ],

  async run(context, jwt, personId) {
    console.log('personId', personId)
    const decodedJwt = jwtDecode(jwt);
    const keys = await context.store.setItem('jwtKeys')
    console.log('Keys from store', keys)
    const userProfile = decodedJwt[Object.keys(decodedJwt)[0]]
    console.log('User Profile', userProfile)
    if (personId === 'true') {
      console.log('Returning person ID')
      return userProfile.person_id
    }
    return JSON.stringify(userProfile, null, 1)

  },
};


