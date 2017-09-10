'use strict';
/* if the configurable attribute of a property is set to false you...
       can't - change the enumerable attribute
             - change the conigurable attribute
             - delete the property
       
       can - change the writeable attribute

*/

var dog = {
    name:'April',
    color:'white'
};

Object.defineProperty(dog, 'name', {configurable:false});

// the following will result in an error when strict is being used
// and will just not update the writeable attribute when strict is 
// not being used.
//Object.defineProperty(dog, 'name', {enumerable:false}); // uncomment to see the error
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));

// you can still change the writeable attibute
Object.defineProperty(dog,'name',{writeable:false});

console.log(Object.getOwnPropertyDescriptor(dog,'name'));

// if the configurable property has been set to false you can't set it back to true
//Object.defineProperty(dog, 'name', {configurable:true}); //uncomment to see the error

// if the configurablt property has been set to false you can't delete a property
//delete dog.name;  // uncomment to see the error


