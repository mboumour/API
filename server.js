const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);

const express = require('express');
const { exec } = require('child_process');
const cors = require('cors'); // Importation de CORS

const app = express();
app.use(cors()); // Utilisation de CORS

app.use(express.urlencoded({ extended: true }));

app.post('/solve', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    console.log(`a = ${a}, b = ${b}`);
    
    exec(`./sum ${a} ${b}`, (error, stdout, stderr) => {
	if (error) {
	    console.error(`exec error: ${error}`);
	    return res.status(500).send("Error occurred !");
	}

	const sum = parseInt(stdout.trim());

	return res.send(`Sum : ${a} + ${b} = ${sum}`);
    });

});