// To declare arrays in Java Script
let marks= Array(6)
marks = new Array(80, 90, 95, 98, 100, 97)  // never closed brackets
//console.log(marks)
// A straight forward way of doing it:
let score= [80,90,95,98,100,97]
//console.log(score)

// to add an element to the end of the array:
score.push(101)
//console.log(score)

// add an element to the beginning of the array:
score.unshift(97.9)
console.log(score)

// remove the last element of the array:
score.pop()
console.log(score)  // 

//displaying the value of an element
//console.log(score[0]) 
//console.log(score[4])

// Length of the array (Length starts from 1 whereas index starts from 0)
console.log(score.length)

// To know the index of a known value
console.log(score.indexOf(100))

// Check if a certain element exists in the array-   done with the .includes() method that returns a boolean (True or False)
console.log(score.includes(100))
console.log(score.includes(100.99))

console.log("Currrent array is: " +score)  // [97.9,80,90,95,98,100,97]

// Now, you can break the original 'score' array into a sub-array-    done with the  .slice[)  method
// So, lets say I want to create a sub-array of [95,98,100] from the main array of [97.9,80,90,95,98,100,97]
let sub_score= score.slice(3,6)   // slice[) increase 5th index by 1.
console.log(sub_score)


// Now, print out all of the elements present in the 'score' array
for(let i=0; i< score.length; i++)
{
 console.log(score[i])
}
console.log("==========================================================")
// Now, sum up all the elements of the array and print out the summed value

let sum=0;
for (let j=0; j<score.length; j++)
{
    sum=sum + score[j]
}
console.log(sum)   
