const express = require("express");
const app = express();
const port = 3000;


//sending GET, PUT, POST, DELETE requests:
// app.get("/", (req, res) => {
//   res.send("Got a GET Request!");
// });

app.post("/postReq", (req, res) => {
  res.send("Got a POST Request!");
});

app.put("/postReq/:id", (req, res) => {
  res.send("Got a PUT Request!");
});
app.delete("/postReq/:id", (req, res) => {
  res.send("Got a DELETE Request!");
});

// Sending an HTML file through get request
//sent at root path
app.get("/", (req, res)=>{
    res.sendFile("./home.html", {root:__dirname})
})


//sending JSON through POST Request
app.post("/jsonReq", (req, res) => {
    res.json({name:"Sachin", age:21, collge: "NITRR"});
  });



// Route Chaining for /postReq
app.route("/postReq")
  .post((req, res) => {
    res.send("Got a POST Request!");
  });



// //route chaining can also be done like this but not preferrable - above one is best
// app.route("/postReq/:id")
//   .put((req, res) => {
//     res.send("Got a PUT Request!");
//   })
//   .delete((req, res) => {
//     res.send("Got a DELETE Request!");
//   });





app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
