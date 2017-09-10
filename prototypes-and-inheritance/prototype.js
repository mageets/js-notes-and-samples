 
/**
 * When the Dog function is created another object is created
 * called Dog, an empty object with a __proto__ property.
 */

var Dog = function (name, color) {
    this.name = name;
    this.color = color;
};

/* the functions prototype property will point to this Dog property */
console.log(Dog.prototype); // will return Dog {}

/**if we add a property to Dogs prototype that property will be added to the Dog
 * object as above
 */
Dog.prototype.age = 16;
console.log(Dog.prototype); // will return Dog {age:16}

/**when we create an object of dog the new keyword will create a new Dog
 * object but will also add a __proto__ property to the created object
 * which points to the Dog functions prototype the properties denoted by
 * the this key word to the object
 */

var april = new Dog('April', 'white');
console.log('april'); // {name:'April',color:'white}
console.log(Object.getPrototypeOf(april)); // Dog {age:16}

/**The same process is followed for any object created using the 
 * Dog function
 */

var rover = new Dog('Rover', 'brown');
console.log(rover); // {name:'Rover',color:'brown'}
console.log(Object.getPrototypeOf(rover)); // Dog {age:16}

/**If we try to access an objects property js will first try and access
 * that property of the actual object if it doesn't find it js will look
 * at the prototype to see if the property is there
 */

// neither object has an age property
console.log(april.age); // 16 (prototypes age)
console.log(rover.age); // 16 (prototypes age)

// if we add an age property to one of the objects it will be reflected
// when you try to access age of that object, but not of the other object
rover.age = 12;
console.log(april.age); // 16 (still the protptype property)
console.log(rover.age); // 12 (age from the object overwrites to prototype age)

/**if we update the prototype property value it will be updated in the object 
 * which does not overwrite that property but the object that does overwrite it
 * will continue to get it's own property value
 */
Dog.prototype.age = 2;
console.log(april.age); // 2 (updated age property of prototype)
console.log(rover.age); // 12 (will still get it's own version of age)

