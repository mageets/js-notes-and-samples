// everything inherits from object
var Cat = function(name, color) {
    this.name = name;
    this.color = color;
};

var fluffy = new Cat(fluffy);

console.log(Object.getPrototypeOf(fluffy)); // Cat {}
console.log(typeof(Object.getPrototypeOf(fluffy))) // Cat;

console.log(Object.getPrototypeOf(Object.getPrototypeOf(fluffy))); // {}
console.log(typeof(Object.getPrototypeOf(Object.getPrototypeOf(fluffy)))); // Object

console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(fluffy)))); // null
console.log(typeof(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(fluffy))))); // object