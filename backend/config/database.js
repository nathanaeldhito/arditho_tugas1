import {Sequelize} from "sequelize";

const db = new Sequelize('tcc-2', 'root', 'dito12#$',{
host: '34.172.81.129',
dialect: 'mysql'
});

export default db;
