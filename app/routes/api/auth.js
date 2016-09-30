var router = require('koa-router')()
var $middlewares  = require('../common/mount-middlewares')(__dirname)

var $ = require('../common/mount-controllers')(__dirname).index_controller;

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  post   /api/auth            => index.auth()
 *  post   /api/auth/check      => index.check()
 */


router.post('/', $.api.auth)

router.post('/check',$middlewares.check_api_token, $.api.check)


module.exports = router
