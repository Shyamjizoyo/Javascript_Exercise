const array1 = [11,2,34,55,3,434,2]
let array2 = array1.map((curElement,index,arr) => {
    return curElement > 9;
})

console.log(array2)
console.log(array1)