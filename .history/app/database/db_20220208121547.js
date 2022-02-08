const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// conectarlo a la DB
db.user = require('../models/users')(db.connection, DataTypes);


module.exports = db;