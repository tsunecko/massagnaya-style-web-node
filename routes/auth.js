var express = require('express');
var router = express.Router();

/* POST login page. */
router.get('', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('', function(req, res, next) {
  /** TODO
   * get login and password,
   * validate by validator,
   * process the errors,
   * check pass with database,
   * create token,
   * return token and user
   */
});

/* POST sms page. */
router.post('/sms', function(req, res, next) {
  /** TODO
   * validate tel and full_name
   * check pass with database,
   */
});

module.exports = router;
