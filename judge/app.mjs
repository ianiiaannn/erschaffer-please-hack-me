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
});
pool.getConnection();

app.get('/', (req, res)=>{
  res.send('score server');
});

app.listen(PORT, ()=>{
  console.log('app started on port '+PORT+'.');
});
