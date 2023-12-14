require("dotenv").config();
const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production"; 
const database ='tasks_npec';

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${database}`;
const pool = new Pool({
  connectionString,
  /*
    SSL is not supported in development
    */
  ssl: true
  
});


module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
