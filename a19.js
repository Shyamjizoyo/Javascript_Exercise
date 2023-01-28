var str = "Shyam ji Gupta"
var str2 = str.slice(0,3) // it also acept negative string
var str3 = str.slice(0,-3) // it also acept negative string

var str4 = str.substring(0,6) // it did not accept negative string
var str5 = str.substring(0,-6) // it did not accept negative string

var str6 = str.substr(-5) // it's best if we have to print from last
var str7 = str.substr(0,-4) // it did not accept negative string

var str8 = str.replace('ji','Ji')

console.log(" ----------- printing slices -------- ");
console.log(str2)
console.log(str3)
console.log("------------ printing substring ----------")
console.log(str4)
console.log(str5)
console.log("------------- printing substr ----------")
console.log(str6)
console.log(str7)
console.log("-------------- printing replace string -----------")
console.log(str8)


//here negative menas counting start from last
