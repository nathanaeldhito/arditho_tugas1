import {Sequelize} from "sequelize";

const db = new Sequelize('notescrud', 'root', '',{
host: 'localhost',
dialect: 'mysql'
});

export default db;