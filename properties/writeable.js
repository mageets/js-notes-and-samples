//'use strict';

var cat = {
    name: 'fluffy',
    color: 'white'
};

console.log(cat);
Object.defineProperty(cat, 'name', {writable:false});

/* if you set the writeable attibute to false for a property
   it will silently fail unless you use strict mode then it 
   will error */
cat.name = 'Paul';
console.log(cat);

/************************************************************
 *  when a property's value is an object but that property is
 *  set to writeable false you can still change the properties
 *  of the object that the original property is pointing to
 *  (as long as they are writeable)
*/

var dog = {
    name: {firstname:'april', lastname:'magee'}
};

console.log(dog);
Object.defineProperty(dog, 'name', {writable:false});
dog.name.lastname = 'mageets';
console.log(dog);

