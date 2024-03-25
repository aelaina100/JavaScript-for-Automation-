// Introduced from version 6
// A class contains methods. To access them, one needs to create an object of the class.
class person
{
    // To define class variables (=Properties) for this class:-
    age =25
    // a property can also be represented as a 'getter' method, if it
      // holds multiple lines of code. For example defining a location property:

      get location()  // A property getter.
      {
        return "canada" // If this line only exists then location() property is simply equivalent to
                          // location= "canada"
      }

      // Now, you can have a constructor() of this  class.
    // constructor is a method that executes by default when you create an object of the class.
    constructor(firstName, lastName) //Defining properties inside class(= They're 'instance variables',
     // meaning that they change).  //Notice: class variables Vs instance variables (= arguments of a constructor)
    { // if one wants to have a new 'firstName' & 'lastName' for every object.
         //Now- variables "Tim" & "Joseph" scope is outside this constructor to start with
           // so use keyword 'this':
          this.firstName =firstName //
           //[left of the '=' operator]: this 'firstName' whose scope is outdside of this constructor but still 
           // within the class ( still within class, because now it is received by the constructor argument or in
           // other cases it's already there such as 'age' and 'location'),now its scope is in this constructor. 
           // [Right of the '=' operator]: & now its value = firstName.
           
          this.lastName =lastName;
    } 
    fulfullName()   // this is called a method
    {
      
      console.log(this.firstName+this.lastName)
      // this.firstName  means: 
      // 'firstName' whose scope is outside of this function but still withing this class (In this class it is
       // defined inside the constructor as 'first name' whose value = this.firstName), now
       // its scope is inside this function. (and same is said for this.LastName)
      
    }
}
let object = new person("Tim", "Joseph");
let object2= new person("Ahmad", "Moe")  // comment out & in to study results.
console.log(object.age)
console.log(object.location)// location without brackets(). As it's only a property (Not a method !)
console.log(object.fullName())  


