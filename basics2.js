const flag= true

if(flag) // if true, controller moves inside the brackets to execute
{
 console.log("Condition met")
}

else
{
 console.log("Condition NOT met")
}
////


if(!flag) // Reversing the value of true. We're not changing the value of flag, so no error will be thrown as a result of using 'const'
{
 console.log("Condition met")
}

else
{
 console.log("Condition NOT met")
}

console.log(flag)  // should display 'true'

/*
while()  // while it's true, keep on executing. If what's inside, doesn't become false then while() statement
         // will keep on executing indefinately 
{

}     */

/*
while(true)
{
    console.log(" I will keep on, indefinately, executing")
}  */


var i=3
while(i>0)
{
    console.log("*** Executing===")
    i--
}
///////////////////////////
var i=0
while(i<10)
{
    console.log(i)
    i++
}
// Note: What can be done with 'While' loop above, can also be achieved with for loop


/*
           // for the 1st time ever, what's inside the do bloxk, will ALWAYS be executed, then if the while() portion is 'true'
          // then the do block will be executed again and then the while() portion will be checked. if it is false,
         // then controller will exit the loob. Otherwise, the execution of 'do' is going to infinately continue
 do      // untill while returns false
{
    
}
while();     // has to end with a semi-colom */

let x= 4
do
{
 console.log("I will be executed at least once no matter what")
 x--
}

while(x>0)