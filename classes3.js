//Now, one can import Classes1.js into this new class:
    // 1- By making classes1.js public 
    // 2- Directly by adding "module.exports =" class Person (in the class to import that is 'classes1.js') &
    // 3- Adding: const person= require('./classes1.js') 
    // 4- Create an object of that class (class1.js) into this one: 
        // let object= new Person( )

        const person= require('./classes2.js')
        
        let object =new person ("Chris", "Edward") 
        object