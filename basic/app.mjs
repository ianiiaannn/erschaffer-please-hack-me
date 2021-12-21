const PORT=80;

import express from 'express';
import Http from 'http';

const app=express();
Http.createServer(app);
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.send('target server');
});

app.listen(PORT, ()=>{
  console.log('app started on port '+PORT+'.');
});
