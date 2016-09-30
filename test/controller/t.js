import test from 'ava'
import superkoa from 'superkoa'

var model = 'users'

var user

var mockUser = {
    // 'username': 'alfred',
    // 'password': '000000'
}

test.before(function * (t) {
    var res = yield superkoa('../../app.js')
        .post('/api/' + model)
        .send(mockUser)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

    user = res.body.user

    t.is(200, res.status)
})


/**
 * Auto generate RESTful url routes.
 *
 * URL routes:
 *
 *  GET    /users[/]        => user.list()
 *  GET    /users/new       => user.new()
 *  GET    /users/:id       => user.show()
 *  GET    /users/:id/edit  => user.edit()
 *  POST   /users[/]        => user.create()
 *  PATCH  /users/:id       => user.update()
 *  DELETE /users/:id       => user.destroy()
 *
 */

// *  GET    /users[/]        => user.list()
test('GET /' + model, function * (t) {
    var res = yield superkoa('../../app.js')
        .get('/' + model)

    t.is(200, res.status)
    t.regex(res.text, /table/g)
})