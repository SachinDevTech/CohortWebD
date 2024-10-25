// import Express Framework and db.js file:
const express = require('express')
const connectDB = require('./db');
const users = require("./routes/users")
const app = express()
const port = 3000


//body parser
app.use(express.json());
// To use the router for all routes
app.use('/api', users); 


// Execute the connectDB() function:
//connect to database
connectDB();


app.get('/', (req, res) => {
  res.send('I am at the home page!')
})

app.listen(port, () => {
  console.log(`Testing app listening on port ${port}`)
})