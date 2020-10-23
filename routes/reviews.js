var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews . */
router.get('/', function(req, res, next) {
  res.send("INDEX /posts/:id/reviews");
});

/* POST reviews create /posts/:id/reviews . */
router.post('/', function(req, res, next) {
  res.send("CREATE /posts/:id/reviews");
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit . */
router.get('/:review_id/edit', function(req, res, next) {
  res.send("EDIT /posts/:id/reviews/:review_id/edit");
});

/* PUT reviews update /posts/:id/reviews/:review_id . */
router.put('/:review_id', function(req, res, next) {
  res.send("UPDATE /posts/:id/reviews/:review_id");
});

/* DELETE reviews delete /posts/:id/reviews/:review_id . */
router.delete('/:review_id', function(req, res, next) {
  res.send("DELETE /posts/:id/reviews/:review_id");
});

module.exports = router;

/*
GET index               /reviews
GET new                 /reviews/new
POST create             /reviews
GET show                /reviews/:review_idid
GET edit                /reviews/:review_idid/edit
PUT update              /reviews/:review_idid
DELETE destroy          /reviews/:review_idid

*/
