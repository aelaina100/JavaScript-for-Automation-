// .map() function modifies every single element of an array into a new value [we're mapping every value into a new one].

    // Given an array, filter out all even numbers. Then, multiply each single value by 3 and store them into a new array.

let values= [12,13,14,16]
let even_values= values.filter(m=>m%2 == 0)  //  [12,14,16]
// .filter() will be executed only if it returns true. If it returns false, it will be regarded as it wasn't even typed out.

let new_values= even_values.map(m=>m*3)
console.log(new_values)       // [36, 42, 48]

// Now, sum up the result array:
let sum= new_values.reduce((sum,number)=>sum+number, 0)
console.log(sum)


// Now- instead of writing all of these lines of code seperately, I can chain them up all in one line:
// For the array 'numbers' declared below, filter out the even numbers and then multiply them all by 3; followed by summing them up.


let numbers= [12,13,14,16]
let summing= numbers.filter(m=>m%2 == 0).map(m=>m*3).reduce((sum,number)=>sum+number,0) 
// if filter() return false, then compiler will treat it as if it wasn't even typed out in the first place (Plus what follows it)
console.log(summing)


// Now, eaxt same problem above. But, instead it's for filtering odd numbers. Then change to ==! in the filter() function.