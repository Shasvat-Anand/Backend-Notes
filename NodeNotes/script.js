
// run script.js

// for(let i =0 ;i<5 ;i++){
//     console.log(i)
// }
// console.log("Hey buddy")

// Process 
// let args = process.argv

// for(let i =2 ;i<args.length;i++){
//     console.log("hello & welcome to ",args[i])
// }


// module.export
// const somevalue = require("./math")

// console.log(somevalue.square(3,4))


// module.export from other directory

// const frt = require("./fruits")
// console.log(frt[0].name)

// local and global installation

const figlet = require("figlet")

figlet("hey jaan kya haal hai", function(err,data){
    if(err){
        console.log("something went wrong")
        console.log(err)
        return 
    }
    console.log(data)
})


 