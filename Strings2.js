// How to concatenate 2 strings 

let day= "Saturday" // concatenate it with " is fun day"
let newQuote= day+ " is fun day"
console.log(newQuote)   // "Saturday is fun day"

// if you want to know where 'day' is present in the 'newQuote'  == at which index the first letter of 'day' is.
var val= newQuote.indexOf('day')  
console.log(val)  //5                   ******note: if 'day' can NOT be found in the entire string, then -1 is returned.******

// But what if I want it for the 2nd 'day'. Well start from the 6th,7th,8th, etc. index
var another_val= newQuote.indexOf('day',6)  
console.log(another_val)  //5
console.log("=========================================================================================================================")

//Now, How many times has the string 'day' appeared in newQuote ?  "Saturday is fun day"

  
