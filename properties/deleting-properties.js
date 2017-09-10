/* a property can be deleted using delete */
var dog = {
    name:'april',
    color:'white'
};

console.log(dog);

delete dog.color;

console.log(dog);
console.log(dog.color); // would print undefined