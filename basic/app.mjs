/* eslint-disable max-len */
const PORT = 80;

import cookieParser from 'cookie-parser';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';


const app = express();
http.createServer(app);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('target server');
});

app.get('/1', (req, res) => {
  res.render('basic', { script: '', message: 'hmmm where is the flag?<br><!-- FLAG{Th1sI5AnExamp1eF1aggggggggggggggggggggggggggggggggggggggggggggggggg} -->' });
});

app.get('/2', (req, res) => {
  res.render('basic', { script: 'document.addEventListener(\'contextmenu\', event => {event.preventDefault();alert(\'No U little hacker\')});', message: 'no rightclick please<br><!-- FLAG{HOW_RUDE_YOU_ARE} -->' });
});

app.get('/admin/logout', (req, res) => {
  console.log(req.headers.host);
  if (req.headers.referer == req.headers.host + '/admin') {
    if (req.cookies.user == 'admin') {
      const reqDate = new Date(req.headers.date);
      const lowDate = new Date('2077 1 0:00 Jan GMT');
      const upDate = new Date('2077 31 23:59 Dec GMT');
      if (lowDate <= reqDate && upDate >= reqDate) {
        if (req.rawHeaders.toString().match(/curl/gi)) {
          if (req.rawHeaders.toString().match(/jp/gi)) {
            res.render('basic', { script: '', message: 'You have been successful logged out!<br>FLAG{FINALLY_LOGOUT_STUPID_SYSTEM}' });
          } else {
            res.render('basic', { script: '', message: 'あなたは誰' });
          }
        } else {
          res.render('basic', { script: '', message: 'The site owner can access this site with command line tool.' });
        }
      } else {
        res.render('basic', { script: '', message: 'Wake up! It\'s already 2077!' });
      }
    } else {
      console.log(req.cookies);
      res.cookie('user', '', { path: '/admin', maxAge: 600000 });
      res.render('basic', { script: '', message: 'Where\'s your user cookie, admin?' });
    }
  } else {
    res.render('basic', { script: '', message: 'No U. You are not from the /admin page.' });
  }
});

app.get('/admin', (req, res)=>{
  res.redirect('/');
});

app.get('/cypo', (req, res)=>{
  res.render('cypo');
});

// XHR
app.post('/cypo', (req, res)=>{
  if (req.query.ans1=='') {

  } else {
    
  }
  console.log(req.query);
  res.send(req.query);
});


app.listen(PORT, () => {
  console.log('app started on port ' + PORT + '.');
});
