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
  fn: function (inputs) {
    console.debug('Running health-check function...');
    passport.authenticate(
      'bearer',
      { session: false },
      (err, user, info) => {
        console.debug('USER INFO: ', user);
        return user;
      }
    )(this.req, this.res);
  }
};
