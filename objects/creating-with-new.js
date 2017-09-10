function Cat(name, color) {
    this.name = name;
    this.color = color;
}

var cat = new Cat('fluffy','white');

console.log(cat); // will log the object
console.log(cat.name + ' is ' + cat.color);


/* if you don't use the new keyword you will the value that you assign 
   the return value of the Cat() call to will be undefined but the this 
   in the Cat() function will refer to the gloabl object, global in node 
   window in the browser 
   
   however 'use strict' would cause this to error
*/

var someOtherCat = Cat('tom', 'grey');
console.log(someOtherCat); // will be undefined
console.log(global.name); // will be tom