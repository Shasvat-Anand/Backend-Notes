const express = require("express")
const path = require ("path")

const app = express()
const port = 3000

app.set("view engine","ejs")

// for render when we are in root directory

app.set("views", path.join(__dirname,"/views"))


app.get("/" , (req,res)=>{
    res.render("home")
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params
    res.render("instagram.ejs",{username})
})



app.get("/rolldice" , (req ,res)=>{
    let dicval = Math.floor(Math.random() *6)+1
    res.render("rolldice",{num :dicval})
})







app.listen(port,()=>{
    console.log("server is running")
})
