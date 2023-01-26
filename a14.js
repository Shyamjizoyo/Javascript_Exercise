// Using Filter in map
let arr = [1,2,3,4]
let arr2 = arr.map((curElement) =>{
 return curElement*2;
}).filter((curElement) => {
    return curElement > 5;
});

// by using fat arrow
// let arr2 = arr.map((curElement) => curElement*2).filter((curElement) => curElement > 5);

console.log(arr2);

