const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt');

async function authentication(req, res, next) {
  try {
    // console.log(req.get('token'));
    const token = req.get('token');
    const userDecoded = verifyToken(token);
    const user = await User.findOne({
      where: {
        id: userDecoded.id,
        email: userDecoded.email,
      },
    });
    if (!user) {
      return res.status(401).json({
        name: 'Authentication Error',
        devMessage: `User with id ${userDecoded.id} not found in database`,
      });
    }
    res.locals.user = user;
    return next();
  } catch (err) {
    return res.status(401).json(err);
  }
}

module.exports = authentication;
