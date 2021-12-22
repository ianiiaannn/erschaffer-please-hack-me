const PORT=80;

import express from 'express';
import Http from 'http';

const app=express();
Http.createServer(app);
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.send('target server');
});

app.get('/1', (req, res)=>{
  res.render('basic', {script: '', message: 'hmmm where is the flag?<br><!-- FLAG{FIRST_LEVELLLLLLLLLLLLLLLLLLLLLL} -->'});
});

app.get('/2', (req, res)=>{
  res.render('basic', {script: 'document.addEventListener(\'contextmenu\', event => {event.preventDefault();alert(\'No U little hacker\')});', message: 'no rightclick please<br><!-- FLAG{HOW_RUDE_YOU_ARE} -->'});
});

app.get('/3', (req, res)=>{
  if(req.headers.referer=='')
  res.render('basic', {script: 'document.addEventListener(\'contextmenu\', event => {event.preventDefault();alert(\'No U little hacker\')});', message: 'no rightclick please<br><!-- FLAG{HOW_RUDE_YOU_ARE} -->'});
});

app.listen(PORT, ()=>{
  console.log('app started on port '+PORT+'.');
});
