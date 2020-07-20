const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../models/adminModel');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'SECRET';

module.exports = (passport) => {
  passport.use(new JwtStrategy(opts, (payload, done) => {
    Admin.findOne({ _id: payload._id })
      .then((admin) => {
        if (!admin) {
          return done(null, false);
        }
        return done(null, admin);
      })
      .catch((error) => {
        console.log(error);
        return done(error);
      });
  }));
};