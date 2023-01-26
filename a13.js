const array1 = [11,2,34,55,3,434,2]
let array2 = array1.map( (curElement,index,arr)=> {
    return ` index no. = ${index} + curElement ${curElement} + ARRAY ${arr};`
})

console.log(array1)
console.log(array2)
