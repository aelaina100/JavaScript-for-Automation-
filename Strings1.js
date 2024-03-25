// Strings and arrays operations are similar (have same methods)

let day = ' tuesday'        // single or double quotes. Does not matter. b
console.log(day.length) //   length starts from 1. How many characters.

// Take the first 4 characters. 'tues'
// Creating 'subString'. Done with .slice[)
let sub_day= day.slice(0,4)
console.log(sub_day)

//What's the character at the 1st index ?
console.log(day[1])

//What's the index of the character 'a' ?
console.log(day.indexOf('a'))
console.log('========================================')

// Now, split 'day' string into 2 different strings (one containing 'Tue' & the other 'day' ) 
  //Splitting is based on a character.
let splitted_string= day.split("s")
let left= splitted_string[0].trim() // trims all leading & trailing white spaces
let right= splitted_string[1]

console.log(left)
console.log(right)

///////////////////////////////////////////////////
let date ='23'   // a number stored as a string. 
let nextDate= '27' 

// Substract these 2 numbers:- First step is to convert them both from strings to numbers.
let c= parseInt(nextDate)-parseInt(date)
console.log(c)   // c=4

// Now, convert 'c' to a string
let number= c.toString()
console.log(number)




