
const jwtDecode = require('jwt-decode');

function hideAttrName(args) {
  console.log('Args', args)
  return false
}

module.exports = {
  name: 'JwtDecode',
  displayName: 'Decode JWT Token',
  description: 'Decode JWT token and reference values',
  args: [
    {
      displayName: 'Token',
      type: 'string',
      defaultValue: '{{bearer}}'
    },
    {
      displayName: 'Attribute Name',
      type: 'string',
      hide: args => args[2].value
    },
    {
      displayName: 'Parse and return person_id',
      type: 'boolean',
      help: 'Parse and return the users uuid.',
      defaultValue: false,
    }
  ],

  async run(context, jwt, attr, personId) {

    const decodedJwt = jwtDecode(jwt);
    const userProfile = decodedJwt[Object.keys(decodedJwt)[0]]

    if (personId) {
      return userProfile.person_id
    }
    if (attr) {
      return userProfile[`${attr}`]
    }

    return JSON.stringify(userProfile, null, 1)
  },
};


