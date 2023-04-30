const express = require('express');

const app = express();

//////////////////////////////////
// permettre l'accès à l'API (CORS)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token,Origin, X-Requested-With, Content, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  
app.use((req, res) => {
    res.json({ message: "UPDATE !" }); 
 });

 app.post('/solver', (req, res) => {
  // Récupérer les données envoyées dans la requête
  const data = req.body;

  // Faire quelque chose avec les données pour résoudre le problème

  // Envoyer une réponse avec le résultat
  res.json({ message: 'Problème résolu !' });
});

module.exports = app;