// Using reduce in map :: converts 3d/2d array in 1d
// also it is used to add, multiply the arry items
let arr = [1,2,3,4]
let arr2 = arr.reduce((accumulator,curElement,index,arr) => {
 return accumulator += curElement});

 let arr3 = arr.reduce((accumulator,curElement,index,arr) => {
    return accumulator += curElement},7); // add 7,3 too

// or 
//  let arr2 = arr.reduce((accumulator,curElement,index,arr) => accumulator += curElement);

console.log(arr2);
console.log(arr3);
