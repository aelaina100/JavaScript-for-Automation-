//Observe the following class: (As it's imported into the classes3.js file)
module.exports = class person
{
    age =25

      get location()  // A property getter.
      {
        return "canada" // If this line only exists then location() property is simply equivalent to
                          // location= "canada"
      }

    constructor(firstName, lastName)
    { 
          this.firstName =firstName 
          this.lastName =lastName;
    } 
    fullName()  
    {
      console.log(this.firstName+this.lastName)
    }
}
 


