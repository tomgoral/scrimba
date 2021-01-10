/////////////////////////////////////////
// Complex Data Types - Objects Part 2 //
/////////////////////////////////////////

// Objects: describe a peice of data in depth
var larry = {
    name: "larry",
    age: 20,
    friends: ["john", "lisa", "al"],
    isPetOwner: true,
    greeting: "Hello Friend!",
    sayGreeting: function(){
        console.log(this.greeting)
    }
}

// console.log(larry.name)
larry.sayGreeting()

// dot notation
// larry.age

// bracket notation
// larry["age"]

// Functions & Methods
    // Function: a type of data that allows us to execute specific code when/as needed
        // login
    // Method: A function that is a property of an object
    
// this keyword inside of an object refers to itself

var object = {
    key: "value",
    
}

// Create an object that describes something of your choosing, like a car or animal.
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.

var fighter = {
    name: "Connor McGregor",
    age: 31,
    reach: 45,
    isobnoxious :true,
    greeting: "Top of the Morning!",
    welcome: function(){
        console.log(this.greeting+", I am "+this.name)
    }
}

fighter.welcome();