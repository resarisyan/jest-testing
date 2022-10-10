const { Photo } = require('../models');

async function authorization(req, res) {
  try {
    const photoId = req.params.id;
    const authenticatedUser = res.locals.user;
    const photo = await Photo.findOne({
      where: {
        id: photoId,
      },
    });
    if (!photo) {
      return res.status(404).json({
        name: 'Data Not Found',
        devMessage: `Photo With id ${photoId} not found`,
      });
    }
    if (photo.userId === authenticatedUser.id) {
      return next();
    } else {
      return res.status(403).json({
        name: 'Authorization Error',
        devMessage: `User with id ${authenticatedUser.id} does not have permission to access Photo with id ${photoId}`,
      });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = authorization;
