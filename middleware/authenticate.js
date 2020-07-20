const passport = require('passport');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err, admin, info) => {
    if (err) {
      console.log(info);
      console.log(err);
      return next(err);
    }

    if (!admin) {
      res.status(400).json({
        msg: 'Authentication Failed ...',
      });
    }

    req.admin = admin;
    return next();
  })(req, res, next);
};
