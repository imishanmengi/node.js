const Sequleize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user',{
    id:{
        type:Sequleize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    name: Sequleize.STRING,
    email:{
        type:Sequleize.STRING,
        unique: true,
    },
    phonenumber:{
        type:Sequleize.STRING,
        unique: true,

    }
});
module.exports=User;