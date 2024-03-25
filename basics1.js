console.log("Hello World")

let a= 4
console.log(a)
// let, var, & const   each one can represent different data types.
// let & const have been introduced from JS6 
// What's the difference between them ?   Answer: Will be explored as we proceed further.

console.log(typeof(a))

let b= 234.6
console.log(typeof(b))

let c= "Ahmad El-Aina"
console.log(typeof(c))

let required= true
console.log(typeof(required))
//This is a comment.

 /*  let c= a + b  will yield an error message denoting that c has already been declared.
     We can not redeclare variable with 'let' keyword, but it's possible with 'var'>   */

     var d= "Some rabdom text"
     var d= "an updated text"
     console.log(d)

     // Howver, you can re-assign with 'let'==>
     c= 2
console.log(c)
//Now: With 'var' type, one can re-declare & re-assign.
  d= "re-assigning value of var d "
  console.log(d)

// with 'const', One can NOT re-declare OR re-assign:==>
const x= 88
/* const x=900
 console.log(x)  */

console.log(!required)  // ! operator reverses boolean values.

//