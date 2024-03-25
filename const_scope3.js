// const Plus 'var' too) -->   The scope is: Global if declared on the global level.
                              // Or limited inside the brackets of anything else: function, if statement, while, do/while, etc

const greeting = "Morning"

//        
//        
          function add (a,b)
          {
            const greeting = "Afternoon"   // scope is limited to inside this function
                                      // also, the fact that no warning appears, confirms this. As one can't re-initialize with 'const'
            return a+b
          }

          if(1==1)
          {  
            const greeting= "Evening"  // scope is limited to inside this 'if' statement.
          }                        // also, the fact that no warning appears, confirms this. As one can't re-initialize with 'const'

          console.log(greeting)  // Output should be 'Morning'

          