var router = require('koa-router')()

var $ = require('../common/mount-controllers')(__dirname).index_controller;

/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /api[/]        => index.index()
 *
 */

router.get('/' , $.api.index)




module.exports = router
