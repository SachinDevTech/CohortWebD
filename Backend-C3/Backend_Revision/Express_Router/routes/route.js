const express = require('express');
const router = express.Router();

// Define the home page route (http://localhost:3500/api/)
router.get('/', (req, res) => {
  res.send('Birds home page');
});

// Define the about route (http://localhost:3500/api/about)
router.get('/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;