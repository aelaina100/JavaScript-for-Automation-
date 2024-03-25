// var (Plus const too)-->   The scope is: Global if declared on the global level.
 //                        Or limited inside the brackets of anything else: function, if statement, while, do/while, etc.
                         

           var greeting = "Morning"

//        the scope is: In function only if declared on the function level.(not 'if' statement,for loop, while, do/while, etc. But only 
//                       a FUNCTION)
//        Ex:
          function add (a,b)
          {
            var greeting = "Afternoon"   // Meaning- 'greeting' will not be recognized outside of this function. (As it's 'var' type)
            return a+b
          }

          if(1==1)
          {
            var greeting= "Evening"
          }

          console.log(greeting)  // Output should be 'Evening' as it overwrites the global level (Unique to 'var' in JS language ONLY)
                                  // the 'greeting' variable inside the function ONLY has a scope within the function itself