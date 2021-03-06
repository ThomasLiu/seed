"use strict";

const Sequelize = require('sequelize')
const tools = require('../common/tools')
var db = require('../../db')

var Area = db.define('area', {
    title: {type: Sequelize.STRING, allowNull: false},
    parentId: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
    index: {type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
},{
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['title']
        }
    ]
})

module.exports = Area



