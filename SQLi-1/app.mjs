const PORT=80;

import express from 'express';
import Http from 'http';
import bodyParser from 'body-parser'

const app=express();
Http.createServer(app);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
  res.render('basic');
});

app.post('/post', (req, res)=>{
  console.log(req.body.username);
  console.log(req.body.password);
  res.send(dbLookup(req.body.username));
});

// eslint-disable-next-line require-jsdoc
async function dbLookup(q) {
  let conn,result;
  try {
    conn=await pool.getConnection()
    result= await conn.query(q);
  } catch (err) {
    console.log(err);
    result=err;
  } finally {
    if (conn) conn.end();
    return result;
  }
}

app.listen(PORT, ()=>{
  console.log('app started on port '+PORT+'.');
});
