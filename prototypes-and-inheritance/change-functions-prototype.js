var Dog = function(name, color) {
    this.name = name;
    this.color = color;
};

Dog.prototype.age = 4;

/* april and rover will both point to the same prototype 
 * with age 4
 */
var april = new Dog('April', 'white');
var rover = new Dog('Rover', 'brown');

console.log(april.age);
console.log(rover.age);

// the below change of prototype creates a new object in
// memory. The dog's prototype property now points at that
// new object
Dog.prototype = {age:5};

// jim is created after the Dog functions prototype is update
// so he will inherit the new object that Dog is pointing to
// {age:5}
var jim = new Dog('Jim','grey');

// april and rover both still point to the old object {age:4}
console.log(april.age); // 4
console.log(rover.age); // 4

console.log(Dog.prototype); // {age:5}
console.log(jim.age); // 5
