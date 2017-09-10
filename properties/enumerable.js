/* the enumerable attribute of a property defines 
   whether that property can be picked up when enumerating
   over the object with for..in */

var dog = {
    name: {firstname:'april', lastname:'magee'}, 
    color: 'white'
};

Object.defineProperty(dog, 'name', {enumerable:false});

// the name property won't be return in the loop below

for(var propName in dog) {
    console.log(propName + ':' + dog[propName]);
}

// the name property also won't show up in the objects keys
console.log(Object.keys(dog)); // will return ['color']

// it also affects JSON serialization
console.log(JSON.stringify(dog));

// you can still access the value of the poperty
console.log(dog.name);
