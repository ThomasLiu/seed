
var path = require('path')

var config = {
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },
    qn_access: {
        accessKey: 'your accessKey',
        secretKey: 'your secretKey',
        bucket: 'seed',
        uploadURL: 'http://up.qiniu.com/',
        origin: 'http://yourorigin.bkt.clouddn.com'
    },
}

module.exports = config