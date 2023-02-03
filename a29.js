// currying function
function sum(num1){
    return function (num2){
        return function (num3){
            console.log(num1+num2+num3);
        }
    }
}
sum(1)(2)(3)

// OR USING FAT ARROW FUNCTION 
const Sum = (num1) => (num2) =>(num3)=>console.log(num1+num2+num3);
Sum(1)(2)(3);