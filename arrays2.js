let score= [80,90,95,98,100,97]
// In the last lesson, I summed up all the numbers present in this array and printed out the sum to the console: ====>

let summ=0;
for (let j=0; j<score.length; j++)
{
    summ=summ + score[j]
}
console.log(summ)

console.log("=======================================")


// Now, this code can be optimized using some powerful array functions:   reduce-filter-map
 // reduce() method is used to perform operations on all the elements of the array (Usually for sum or multiplication)

 let summy= score.reduce((sum,mark)=> sum+mark, 0) // stating sum=sum + mark (with sum =0)
 console.log(summy)

 
 // Now, you have: 12,13,14,16. Create a new array containing even numbers only.
 let z= [12,13,14,16]
 let n= []
 for(let j=0; j< z.length; j++)
 {
   if(z[j] % 2 ==0)
   {
      n.push(z[j]) //writing .push() method is something that belongs to plain coding ONLY/
   }
 }       
console.log(n)

console.log("-----------------------------------------------")

 // Now, the above code can be optimized with the filter() method [ We're filtering even numbers froma given array]
 let b= z.filter(a=>a %2 ==0) // .filter() will be executed only if it returns true. if it returns false, it will be regarded as
                             // if it's not typed out.
                       // Also: By default .filter() .reduce()  .map()  has .push() method ALready included in their background coding.
 console.log(b)
 /////////////////////////////////////////////