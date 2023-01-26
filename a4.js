
// == —> loose equality (double equals)
// Double equals (==) will perform a type conversion when comparing two things, 
//and will handle NaN, -0, and +0 specially to conform to 
//IEEE 754 (so NaN != NaN, and -0 == +0);

var a = 5;
var b = '5';
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);

//----------------------------------------------------------------
// === —> strict equality (triple equals) 
// Triple equals (===) will do the same comparison as double equals
// (including the special handling for NaN, -0, and +0) but 
//without type conversion; if the types differ, false is returned.