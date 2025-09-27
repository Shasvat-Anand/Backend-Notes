const figlet = require("figlet")

figlet("hey jaan kya haal hai", function(err,data){
    if(err){
        console.log("something went wrong")
        console.log(err)
        return 
    }
    console.log(data)
})