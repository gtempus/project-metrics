const passport = require('passport');

module.exports = {
  friendlyName: 'Health check',
  description: '',
  inputs: {

  },
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/health-check'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },
  fn: async function (inputs) {
    passport.authenticate(
      'bearer',
      function(req, res) {
        console.debug(req.user);
        res.json(req.user);
    });
    // All done.
  return;
  }
};
