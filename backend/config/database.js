import {Sequelize} from "sequelize";

const db = new Sequelize('notescrud', 'root', 'dito12#$',{
host: '34.60.77.124',
dialect: 'mysql'
});

export default db;
