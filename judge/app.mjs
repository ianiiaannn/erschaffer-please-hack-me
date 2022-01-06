/* eslint-disable require-jsdoc */
const PORT = 80;
let dbPrepared=false;

import express from 'express';
import Http from 'http';
import mysql from 'mysql2/promise';

const app = express();
Http.createServer(app);
app.set('view engine', 'ejs');

const pool=mysql.createPool({
  host: 'database',
  user: 'root',
  password: '',
  database: 'judge',
});

async function dbLookup(q) {
  let message; let retry=true;
  while (retry) {
    retry=false;
    try {
      await pool.query({sql: q})
          .then((results)=>{
            message=results;
          }).catch((error)=>{
            if (error) message= error;
            throw error;
          });
      return message;
    } catch (err) {
      if (err.code=='ETIMEDOUT') {
        console.log('Cannot connect to database server. Reconnecting.');
        retry=true;
      }
    }
  }
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
  await dbLookup(`CREATE DATABASE IF NOT EXISTS \`judge\``);
  await dbLookup(`CREATE TABLE IF NOT EXISTS \`problems\` (
    \`id\` int(6) unsigned NOT NULL,
    \`content\` varchar(200) NOT NULL,
    \`flag\` varchar(200) NOT NULL,
    PRIMARY KEY (\`id\`)
  ) DEFAULT CHARSET=utf8;`);

  dbPrepared=true;
  console.log('Database init finish. Accepting queue.');
}
dbInit();
