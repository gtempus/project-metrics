const passport = require('passport'),
      BearerStrategy = require('passport-http-bearer').Strategy,
      axios = require('axios');

passport.use(new BearerStrategy(
  async function(token, done) {
    let info;
    try {
      info = await axios.get('/https://www.googleapis.com/oauth2/v1/userinfo', {
        params: {
          access_token: token
        }
      });
      return done(null, info, { scope: 'read' });
    } catch (err) {
      return done(err);
    }
  }
));
