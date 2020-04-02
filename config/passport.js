const passport = require('passport'),
      BearerStrategy = require('passport-http-bearer').Strategy,
      axios = require('axios');

passport.use(new BearerStrategy(
  async function(token, done) {
    let info;
    try {
      console.debug('Calling google userinfo...');
      info = (await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        params: {
          access_token: token
        }
      })).data;
      return done(null, info, { scope: 'read' });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }
));
