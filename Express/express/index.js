const express = require("express")
const app = express()

let port = 3000

// console.dir(app)

//  root path "/"

app.get("/",(req , res)=>{
    res.send("helloworld")
})


//  new path "/{name of the path}"

// app.get("/newvalue", (req ,res) =>{
//     res.send("new value routing")
// })




// listening to the request coming 

app.listen(port,()=>{
    console.log(`app is listening of port ${port}`)
})


//  use is use to listen for any kind of request is coming from the client
// app.use((req ,res) =>{
//     console.log("request receive")    

// })

//path parameter 

app.get("/:username/:id",(req, res) => {
    console.log(req.params)
    let {username , id } = req.params;
    
    res.send(`this is page of user @${req.params.username} ${username} ${id}`)

    
})


//  query String 

app.get("/search",(req, res) =>{
    console.log(req.query)

    let{ q ,color ,weight} = req.query

    if(!q){
        res.send("Nothing is in the Search")
    }
    else{

        res.send(`<h1> this is result on this input:${q} ${color} ${weight} </h1>`)
    }
})

