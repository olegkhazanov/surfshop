var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register page. */
router.get('/register', function(req, res, next) {
  res.send('GET /register' );
});

/* POST /register page. */
router.post('/register', function(req, res, next) {
  res.send('POST /register' );
});

/* GET /login page. */
router.get('/login', function(req, res, next) {
  res.send('GET /login' );
});

/* POST /login page. */
router.post('/login', function(req, res, next) {
  res.send('POST /login' );
});

/* GET /profile page. */
router.get('/profile', function(req, res, next) {
  res.send('GET /profile' );
});

/* PUT /profile page. */
router.put('/profile/:user_id', function(req, res, next) {
  res.send('GET /profile/:user_id' );
});

/* GET /forgot page. */
router.get('/forgot', function(req, res, next) {
  res.send('GET /forgot' );
});

/* PUT /forgot page. */
router.put('/forgot', function(req, res, next) {
  res.send('PUT /forgot' );
});

/* GET /reset-password page. */
router.get('/reset/:token', function(req, res, next) {
  res.send('GET /reset/:token' );
});

/* PUT /reset-password page. */
router.put('/reset/:token', function(req, res, next) {
  res.send('PUT /reset/:token' );
});


module.exports = router;
