const express = require("express")
const app = express();

const port = 8080;

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

let posts=[

    {
        username : "anandkumar",
        content :"i am coding"
        
    },
    {
        username : "anandkumaragrahari",
        content :"i am coding very well"
        
    },
    {
        username : "arjun",
        content :"i am good in coding"
        
    },
    {
        username: "atulkumar",
        content :"i am coding and making stuff"
        
    },
]



app.get("/posts",(req,res)=>{
    res.render("index" ,{posts})
})




app.listen(port , ()=>{
    console.log("app is listening...")
})