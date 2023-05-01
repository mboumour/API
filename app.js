const express = require('express');
const bodyParser = require('body-parser');
// const { exec } = require('child_process');
// const { spawn } = require('child_process');

// const cors = require('cors'); // Importation de CORS
// app.use(cors());

const app = express();
app.use(bodyParser.json());

// Permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Route GET /solver
app.get('/solver', (req, res) => {
  res.json({ message: "GET request received on /solver route3" }); 
});

// Route POST /solver
app.post('/solver', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  
  /*
  exec(`./sum ${a} ${b}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).send("Error occurred !");
    }
  
    const sum = parseInt(stdout.trim());
  
    return res.send(`Sum : ${a} + ${b} = ${sum}`);
      });*/

    /*
    const process = spawn('./sum', [`${a}`, `${b}`]);
    process.stdout.on('data', (data) => {
      // console.log(`stdout: ${data}`);
      return res.send(`Sum : ${a} + ${b} = ${data}`);
    });*/

    res.send(`Sum : ${a} + ${b}`);
    // res.json({ message: 'Problème résolu !' });
});

// Autres routes...

// Gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue !' });
});

module.exports = app;
