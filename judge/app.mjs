const PORT=80;

import express from 'express';
import Http from 'http';
import mariadb from 'mariadb';

const app=express();
Http.createServer(app);
app.set('view engine', 'ejs');

const pool=mariadb.createPool({
  host: 'database',
  user: 'root',
  password: 'serect',
  connectionLimit: '5',
  database: 'judge'
});
pool.getConnection();

async function dbLookup(q) {
  let conn,message;
  try {
    conn = await pool.getConnection();
    message = await conn.query(q);
  } catch (err) {
    console.log(err);
    message = err;
  } finally {
    if (conn) conn.end();
    return message;
  }
};

app.get('/', (req, res)=>{
  res.render('homepage');
});

app.post('/getlist', (req, res)=>{
  res.send(dbLookup(''));
});

app.listen(PORT, ()=>{
  console.log('app started on port '+PORT+'.');
});

function dbInit(){
  console.log(dbLookup`CREATE DATABASE IF NOT EXISTS \`judge\``);
  console.log(dbLookup`use judge`);
  console.log(dbLookup(`CREATE TABLE IF NOT EXISTS \`problems\` (
    \`id\` int(6) unsigned NOT NULL,
    \`content\` int(3) unsigned NOT NULL,
    \`flag\` varchar(200) NOT NULL,
    PRIMARY KEY (\`id\,\`rev\`)
  ) DEFAULT CHARSET=utf8;`));
}
dbInit();
