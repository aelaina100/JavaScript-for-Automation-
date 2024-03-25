
// An addition function:
function sum(a,b)
{
    return  a+b
} 

// The controller doesn't execute the function above; Unless 
  // the function's name is invoked somewhere below in the code (Universal concept)

  var number= sum(5,6)  // The returned value is 11 which equals sum(5,6). 11 is in the registry. Capture it with 'number'
  console.log(number)

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // The syntax of the above function can be simplified with "Anonymous function"/ "function expressions" syntax style.

let sum_of_numbers = (a,b)=> a+b


// The controller doesn't execute the function above; Unless 
  // the function's name is invoked somewhere below in the code (Universal concept)

// and to call it: 
console.log(sum_of_numbers(1,11))




/* Below is another way of writing the very first function on top

let sum_of_numbers = function (a,b)
{
    return a+b
} 

// The controller doesn't execute the function above; Unless 
  // the function's name is invoked somewhere below in the code (Universal concept)




  */