const { log } = require("console");
const express = require("express");

const app = express();

// const port = 3000;

function sum(n){
    let s = 0;
    for(let i = 0; i <= n; i++){
        s += i;
    }
    return s;
}

app.get("/", (req,res) => {
    // const n = req.query.n;
    // const ans = sum(n);
    // res.send("hii, your sum is: " + ans);


    // res.send("hi there");
    throw new Error(
        console.log("Error Thrown")
    )
})

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
  });
  