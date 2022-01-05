/* eslint-disable max-len */
const PORT = 80;

import cookieParser from 'cookie-parser';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import formidable from 'formidable';
import md5File from 'md5-file';
import {sha1File} from 'sha1-file';


const app = express();
http.createServer(app);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false, limit: '4mb'}));

app.get('/', (req, res) => {
  res.send('target server');
});

app.get('/1', (req, res) => {
  res.render('basic', {title: '第一題', script: '', message: 'hmmm where is the flag?<br><!-- FLAG{Th1sI5AnExamp1eF1aggggggggggggggggggggggggggggggggggggggggggggggggg} -->'});
});

app.get('/2', (req, res) => {
  res.render('basic', {title: '第二題', script: 'document.addEventListener(\'contextmenu\', event => {event.preventDefault();alert(\'No U little hacker\')});', message: 'no rightclick please<br><!-- FLAG{HOW_RUDE_YOU_ARE} -->'});
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
            res.render('basic', {title: 'HTTP Header', script: '', message: 'You have been successful logged out!<br>FLAG{FINALLY_LOGOUT_STUPID_SYSTEM}'});
          } else {
            res.render('basic', {title: 'HTTP Header', script: '', message: 'あなたは誰'});
          }
        } else {
          res.render('basic', {title: 'HTTP Header', script: '', message: 'The site owner can access this site with command line tool.'});
        }
      } else {
        res.render('basic', {title: 'HTTP Header', script: '', message: 'Wake up! It\'s already 2077!'});
      }
    } else {
      console.log(req.cookies);
      res.cookie('user', '', {path: '/admin', maxAge: 600000});
      res.render('basic', {title: 'HTTP Header', script: '', message: 'Where\'s your user cookie, admin?'});
    }
  } else {
    res.render('basic', {title: 'HTTP Header', script: '', message: 'No U. You are not from the /admin page.'});
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
  if (req.query.ans1=='There are only 10 kinds of people in this world: those who know binary and those who don’t.') {
    if (req.query.ans2=='Ljnbja lryqna') {
      if (req.query.ans3=='Programming is like sex:One mistake and you have to support it for the rest of your life.') {
        if (req.query.ans4=='b3abe5d8c69b38733ad57ea75e83bcae42bbbbac75e3a5445862ed2f8a2cd677') {
          res.send({cryptography, flag: 'FLAG{e098b8a25b0a7a266299a01606a650ea672c42a3fb10f5a3c5265b31e59a1331}', message: 'You win! The flag is SHA256 my favotie game.'});
        } else {
          res.send({flag: 'FLAG{BaseBaseBaseBaseBaseBase_BaseBaseBaseBase}', message: 'What is the SHA256 hash of string "SHA256"?'});
        }
      } else {
        res.send({flag: 'FLAG{Rs_jwho_Qosgofia}', message: 'UHJvZ3JhbW1pbmcgaXMgbGlrZSBzZXg6T25lIG1pc3Rha2UgYW5kIHlvdSBoYXZlIHRvIHN1cHBvcnQgaXQgZm9yIHRoZSByZXN0IG9mIHlvdXIgbGlmZS4='});
      }
    } else {
      res.send({flag: 'FLAG{TH1S1S2EZF0RMEEEEEEEEEEE}', message: 'Va pelcgbtencul, n Pnrfne pvcure vf bar bs gur fvzcyrfg naq zbfg jvqryl xabja rapelcgvba grpuavdhrf. Vg vf n glcr bs fhofgvghgvba pvcure va juvpu rnpu yrggre va gur cynvagrkg vf ercynprq ol n yrggre fbzr svkrq ahzore bs cbfvgvbaf qbja gur nycunorg. Gur nafjre vf "Ywaown yeldan"'});
    }
  } else {
    res.send({message: '01010100 01101000 01100101 01110010 01100101 00100000 01100001 01110010 01100101 00100000 01101111 01101110 01101100 01111001 00100000 00110001 00110000 00100000 01101011 01101001 01101110 01100100 01110011 00100000 01101111 01100110 00100000 01110000 01100101 01101111 01110000 01101100 01100101 00100000 01101001 01101110 00100000 01110100 01101000 01101001 01110011 00100000 01110111 01101111 01110010 01101100 01100100 00111010 00100000 01110100 01101000 01101111 01110011 01100101 00100000 01110111 01101000 01101111 00100000 01101011 01101110 01101111 01110111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01100001 01101110 01100100 00100000 01110100 01101000 01101111 01110011 01100101 00100000 01110111 01101000 01101111 00100000 01100100 01101111 01101110 11100010 10000000 10011001 01110100 00101110'});
  }
  console.log(req.query);
  res.send(req.query);
});

app.get('/md5', (req, res)=>{
  res.render('basic', {title: 'Same MD5 in two files?', script: '', message: 'Give me two .idcard file with same MD5 to prove you are the agent. Upload limit is 4mb.<br><form method="POST"enctype="multipart/form-data"><input type="file" name="file1"><input type="file" name="file2"><button action="submit">upload</button></form>'});
});

app.post('/md5', (req, res)=>{
  const form=new formidable.IncomingForm();
  form.parse(req, (err, fields, files)=>{
    if (err) {
      res.send('server error.');
    } else {
      console.log(files.file1.PersistentFile);
      if (/\.idcard$/gi.test(files.file1.originalFilename)&&/\.idcard$/gi.test(files.file2.originalFilename)) {
        sha1File(files.file1.filepath).then((sha11)=>{
          sha1File(files.file2.filepath).then((sha12)=>{
            if (sha11!=sha12) {
              md5File(files.file1.filepath).then((md51)=>{
                md5File(files.file2.filepath).then((md52)=>{
                  if (md51==md52)res.send('FLAG{MDMDMDMDMD}');
                  else res.send('Wrong files.');
                });
              });
            } else {
              res.send('Same flies.');
            }
          });
        });
      } else {
        res.send('These are not .idcard files!');
      }
      // res.send(files.file1.filepath);
    }
  });
});

app.listen(PORT, () => {
  console.log('app started on port ' + PORT + '.');
});
