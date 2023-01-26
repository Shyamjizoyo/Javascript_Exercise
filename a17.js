// use reduce for flatten array
const array1 = [ 
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10,21] ]
let array2 = array1.reduce((accum,currValue) =>
{
    return accum.concat(currValue);
});
console.log(array2);