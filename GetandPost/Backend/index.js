const express = require("express");

const app = express();

const port = 8080;

app.use(express.json())

app.use(express.urlencoded({extended:true}))




app.get("/register", (req , res)=>{
    console.log(req.query)
    const {user, password} = req.query;
    res.send(`this is Get request welcome! ${user}`);
});


app.post("/register", (req , res)=>{
    console.log(req.body)
    const {user , password}= req.body;
    res.send(`this is post request welcome ${user}`);
})

app.listen(port, ()=>{
    console.log("server is running");
});