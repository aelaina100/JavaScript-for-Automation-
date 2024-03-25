for (let k=0; k<10; k++)
{
    console.log(k)     // predict the output
}

// the above can be achieved with 'while' loop

console.log("====================")


let j=0;
while(j<10)
{
    console.log(j)
    j++
}

//'For loops' & 'while statements' achieve the same end result. 
// 'For-loop' will repeat executing the block for a fixed number of times
//'while' loop will keep on executing the block as long as its argument meets the condition of 'true'. Once its 'false' controller exits.

let required = true
while(required)
{
    console.log(required)
    required= false
}
/***************************************************************************************** */
// Get the numbers that are common multiples of 2 & 5 (from 1 to 100)  (Answer: 10, 20, 30, 40, 50)
for (let i=1; i<101; i++)
{
 if (i%2 ==0 && i%5==0)
 {
  console.log(i + " ********************* is a multiple of 2 & 5")
 }

 else
 {
    console.log(i + " is NOT a multiple of 2 & 5")
 }
} 

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")

// Get the numbers that are common multiples of EITHER  2 or 5 (from 1 to 100)  (Answer: 10, 20, 30, 40, 50)
for (let i=1; i<101; i++)
{
 if (i%2 ==0 || i%5==0)
 {
  console.log(i + " ********************* is a multiple of 2 or 5")
 }

 else
 {
    console.log(i + " is NOT a multiple of 2 or 5")
 }
}

console.log("=================================More specific way below======================================")

for (let i=1; i<101; i++)
{
 if (i%2 ==0 )
 {
  console.log(i + " ********************* is a multiple of 2")
 }

 else if (i%5==0)
 {
    console.log(i + " is NOT a multiple of 5")
 }
 else
 {
    console.log(i + " is NOT a multiple of 2 & 5")
 }
}

