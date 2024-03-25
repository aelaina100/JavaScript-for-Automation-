// For the numbers of 1-100 Get the first 3 numbers that are common multiples of 2 & 5 (from 1 to 100)  (Answer: 10, 20, 30, 40, 50)
let n=0
for (let i=1; i<101; i++)
{
 
    if (i%2 ==0 && i%5==0)
 {
  console.log(i + " ********************* is a multiple of 2 & 5")
  n++
  if (n == 3)
  {
    break;
  }

 }



 else
 {
    console.log(i + " is NOT a multiple of 2 & 5")
 }
}