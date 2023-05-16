const passport = require('../config/passport')

const authenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return res.status(401).json('false')
    } else if (!user) {
      return res.status(404).json({ error: 'cannot find user.' })
    }
    req.user = user
    next()
  })(req, res, next)
}

module.exports = { authenticated }