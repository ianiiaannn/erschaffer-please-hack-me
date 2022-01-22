const PORT = 23456;
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import childProcess from 'child_process';

const app = express();
http.createServer(app);
app.use(bodyParser.urlencoded({ extended: false }));


const form = '<h1>Cowsay</h1><form method="POST"><input name=input></input><button type="submit">Submit</button></form><br><pre>'

app.get('/', (req, res) => {
  res.send(form);
});

app.post('/', (req, res) => {
  let output, input = req.body.input;
  if(!input)input=';/usr/games/fortune';
  try {
    const process = childProcess.spawnSync('echo ' + input + '|/usr/games/cowsay ', {
      shell: true,
    });
    /* If the shell option is enabled, do not pass unsanitized user input to this function.
    Any input containing shell metacharacters may be used to trigger arbitrary command execution.*/
    // :P
    output = process.output[1].toString();
  } catch (err) {
    output = err;
  }
  console.log(output)
  res.send(form + output + '</pre>');
});

app.listen(PORT, () => {
  console.log('app started on port ' + PORT + '.');
});
