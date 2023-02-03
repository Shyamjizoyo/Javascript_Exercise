// es7 2017 feature
var info = { name: 'shyam',college:"invertis",age:"18"}

 // print values without using loop 
console.log(Object.values(info)) 
// print object converted to array
console.log(Object.entries(info)) 

// print object converted to object
var ObjectToObject = Object.entries(info) 
console.log(Object.fromEntries(ObjectToObject)) 