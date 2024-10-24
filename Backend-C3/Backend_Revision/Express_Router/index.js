const express = require('express');
const app = express();
const port = 3500;

// Import the router from the routes module
const routes = require('./routes/route');

// Use the birds router at the "/birds" path
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
