// important lines marked with !!

function Animal(voice) {
    this.voice = voice || 'growl';
}

Animal.prototype.speak = function() {
    console.log(this.voice);
}

function Cat(name, color) {
    // call the animal constructor from the Cat constructor so
    // that any Animal related initilization can occur
    //*******************************************************
    Animal.call(this, 'meeeow'); 
    //*******************************************************
    this.name = name;
    this.color = color;
}
// assign animal as the prototype of the cat function
//*******************************************************
Cat.prototype = Object.create(Animal.prototype);
//*******************************************************
// The constructor function will be animal we don't wan this we
// want it to be cat
console.log(Cat.prototype.constructor);

// to make it cat we need to set the constructor on the cat prototpye
//*******************************************************
Cat.prototype.constructor = Cat;
//*******************************************************
// now it is cat
console.log(Cat.prototype.constructor);

Cat.prototype.clean = function() {
    console.log('I\'m cleaning myself');
}

// set the constructor function of our
var fluffy = new Cat('fluffy','white');
fluffy.speak();
fluffy.clean();

function Dog(name,color) {
    Animal.call(this);
    this.name = name;
    this.color = color;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

var april = new Dog('april', 'white');
april.speak(); // default speak behaviour
// april.clean(); this would fail as neither dog not animal have a clean function