// let -->   The scope is: Global if declared on the global level.

let greeting = "Morning"

//        
//        
          function add (a,b)
          {
            let greeting = "Afternoon"   // scope is limited to inside this function
                                        // also, the fact that no warning appears, confirms this. As one can't re-initialize with 'let'
            return a+b
          }

          if(1==1)
          {  
            let greeting= "Evening"  // scope is limited to inside this 'if' statement.
          }                         // also, the fact that no warning appears, confirms this. As one can't re-initialize with 'let'

          console.log(greeting)  // Output should be 'Morning'

          