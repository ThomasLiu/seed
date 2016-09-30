var db_setting = {
    host:     '127.0.0.1',
    database: 'seed_test',
    user:     'root',
    password: 'your',
    dialect: 'mysql',
    //socketPath: '/var/run/mysqld/mysqld.sock',
    port:     '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
}

if (process.env.NODE_ENV === 'production') {
    db_setting.database = 'seed'
    db_setting.host = 'your.mysql.rds.aliyuncs.com'
    db_setting.user = 'your'
    db_setting.password = 'your'
} else if (process.env.NODE_ENV === 'test') {
    // for test
    db_setting.database = 'seed_test'
}

module.exports = db_setting