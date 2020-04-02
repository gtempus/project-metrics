const passport = require('passport');

module.exports = {
  friendlyName: 'Health check',
  description: '',
  inputs: {

  },
  exits: {
//    success: {
//      responseType: 'view',
//      viewTemplatePath: 'pages/health-check'
//    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },
  fn: async function (inputs) {
    passport.authenticate(
      'bearer',
      function(err, user, info) {
        console.debug(user);
        this.res.json(user);
    });
    // All done.
  return;
  }
};
