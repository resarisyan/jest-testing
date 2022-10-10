const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
  static async reqister(req, res) {
    try {
      const { email, password, username } = req.body;

      console.log(password);
      const result = await User.create({
        email,
        password,
        username,
      });
      console.log(result);
      let response = {
        id: result.id,
        username: result.username,
        email: result.email,
      };
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw {
          name: 'User Login Error',
          devMessage: `User with email ${email} not found`,
        };
      }

      const isCorrect = comparePassword(password, user.password);
      if (!isCorrect) {
        throw {
          name: 'User Login Error',
          devMessage: `User's password with email ${email} does not match`,
        };
      }

      let payload = {
        id: user.id,
        email: user.email,
      };

      const token = generateToken(payload);
      return res.status(200).json({ token });
    } catch (err) {
      return res.status(401).json(err);
    }
  }
}

module.exports = UserController;
