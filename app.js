const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Route GET /solver
app.get('/solver', (req, res) => {
  res.json({ message: "GET request received on /solver route" }); 
});

// Route POST /solver
app.post('/solver', (req, res) => {
  const data = req.body;

  // Faire quelque chose avec les données pour résoudre le problème

  res.json({ message: 'Problème résolu !' });
});

// Autres routes...

// Gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue !' });
});

module.exports = app;
