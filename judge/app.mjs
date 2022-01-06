/* eslint-disable require-jsdoc */
const PORT = 80;

import express from 'express';
import Http from 'http';
import mysql from 'mysql2/promise';

const app = express();
Http.createServer(app);
app.set('view engine', 'ejs');

const pool=mysql.createPool({
  host: 'database',
  user: 'root',
  password: 'serect',
  database: 'judge',
});

async function dbLookup(q) {
  let message;
  await pool.query({sql: q})
      .then((results)=>{
        console.log(message);
        message=results;
      }).catch((error)=>{
        if (error) message= error;
        throw error;
      });
  return message;
};

app.get('/', (req, res) => {
  res.render('homepage');
});

app.post('/getlist', (req, res) => {
  res.send(dbLookup(''));
});

app.listen(PORT, () => {
  console.log('app started on port ' + PORT + '.');
});

async function dbInit() {
  console.log(await dbLookup(`CREATE DATABASE IF NOT EXISTS \`judge\``));
  console.log(await dbLookup(`CREATE TABLE IF NOT EXISTS \`problems\` (
    \`id\` int(6) unsigned NOT NULL,
    \`content\` varchar(200) NOT NULL,
    \`flag\` varchar(200) NOT NULL,
    PRIMARY KEY (\`id\`)
  ) DEFAULT CHARSET=utf8;`));
  console.log('aaaaaaa');
}
dbInit();
