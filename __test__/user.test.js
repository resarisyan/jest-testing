const app = require('../app');
const request = require('supertest');
const { sequelize } = require('../models');

const idPhoto = 1;
const userData = {
  email: 'resarisyan@gmail.com',
  password: '123456',
};
const photoData = {
  title: 'Foto Baru',
  caption: 'Caption Foto Baru',
  image_url: 'https://fotobaru.com',
};

// CreatePhoto
describe('POST /photos', () => {
  it('Should send response with 200 status code', (done) => {
    request(app)
      .post('/users/login')
      .send(userData)
      .end((err, res) => {
        if (err) done(err);
        request(app)
          .post('/photos')
          .send(photoData)
          .set('token', res.body.token)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).toEqual(201);
            expect(typeof res.body).toEqual('object');
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('title');
            expect(res.body).toHaveProperty('caption');
            expect(res.body).toHaveProperty('image_url');
            expect(res.body).toHaveProperty('UserId');
            expect(res.body).toHaveProperty('createdAt');
            expect(res.body).toHaveProperty('updatedAt');
            done();
          });
      });
  });
});

describe('POST /photos', () => {
  it('Should send response with 401 status code', (done) => {
    request(app)
      .post('/photos')
      .send(photoData)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(401);
        expect(typeof res.body).toEqual('object');
        done();
      });
  });
});

// GetAllPhotos
describe('GET /photos', () => {
  it('Should send response with 200 status code', (done) => {
    request(app)
      .post('/users/login')
      .send(userData)
      .end((err, res) => {
        if (err) done(err);
        request(app)
          .get('/photos')
          .set('token', res.body.token)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual('object');
            res.body.forEach((photo) => {
              expect(photo).toHaveProperty('id');
              expect(photo).toHaveProperty('title');
              expect(photo).toHaveProperty('caption');
              expect(photo).toHaveProperty('image_url');
              expect(photo).toHaveProperty('UserId');
              expect(photo).toHaveProperty('createdAt');
              expect(photo).toHaveProperty('updatedAt');
            });
            done();
          });
      });
  });
});

describe('GET /photos', () => {
  it('Should send response with 401 status code', (done) => {
    request(app)
      .get('/photos')
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(401);
        expect(typeof res.body).toEqual('object');
        done();
      });
  });
});

// GetOnePhotoById
describe('GET /photos/:id', () => {
  it('Should send response with 200 status code', (done) => {
    request(app)
      .post('/users/login')
      .send(userData)
      .end((err, res) => {
        if (err) done(err);
        request(app)
          .get('/photos/' + idPhoto)
          .set('token', res.body.token)
          .end((err, res) => {
            if (err) done(err);
            expect(res.status).toEqual(200);
            expect(typeof res.body).toEqual('object');
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('title');
            expect(res.body).toHaveProperty('caption');
            expect(res.body).toHaveProperty('image_url');
            expect(res.body).toHaveProperty('UserId');
            expect(res.body).toHaveProperty('createdAt');
            expect(res.body).toHaveProperty('updatedAt');
            done();
          });
      });
  });
});

describe('GET /photos/:id', () => {
  it('Should send response with 401 status code', (done) => {
    request(app)
      .get('/photos/' + idPhoto)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).toEqual(401);
        expect(typeof res.body).toEqual('object');
        done();
      });
  });
});
