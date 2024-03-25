// Sorting in strings Vs numbers.

let fruits= ["Bananna", "mango", "pomegrante", "apple"]
fruits.sort()   // it changes the original array.     //.sort(is only for 'strings')
console.log(fruits)  // preferance is for capital letters.


    // To sort out from minimum to maximum
let values= [12,13,003,14,16]
values.sort((a,b)=> a-b)    // a-b implies the minimum difference will be included in the front and so on.
console.log(values)


    // To sort out from maximum to minimum
values.sort((a,b)=> b-a)    // a-b implies the Maximum addition will be included in the front and so on.
console.log(values)

// Crucial: predict the output=>
console.log("**********")
console.log(values)   
console.log("==================================================================================================")

// Question: reverse the below array:
let numbers= [12,13,113,14,16]
numbers.reverse()     // permenantly reverses the original array
console.log(numbers)