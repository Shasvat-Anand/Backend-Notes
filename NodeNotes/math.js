const add = (a,b) => a+b

const multiply = (a,b) =>a*b

const g = 9.8
const pi = 3.14

// module.exports ;

// 1 way to export all the function and method

// let obj ={
//     sum:add,
//     mul:multiply,
//     g:g,
//     pi:pi
    
// }
// console.log(add(2,3))

// module.exports = obj

// 2-way of doing

// module.exports = {
    
 
//     sum:add,
//     mul:multiply,
//     g:g,
//     pi:pi
    
// }

// 3-way 

// module.exports.square = (a,b) => a**b


// 4-way 

exports.square = (a, b) =>a**b

