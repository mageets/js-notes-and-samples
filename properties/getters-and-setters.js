/**getters and setters can be defined where the 
 * a function is called when a property is accessed 
 * or set to a new value
 */

 var dog = {
     name: {firstName: 'April', lastName: 'Magee'}
 };

 Object.defineProperty(dog, 'fullName', {
     get: function() {
         return this.name.firstName + ' ' + this.name.lastName;
     },
     set: function(value) {
         var nameParts = value.split(' ');
         this.name.firstName = nameParts[0];
         this.name.lastName = nameParts[1];
     }
 });

 console.log(dog.fullName);
 
 dog.fullName = 'Paul Magee';

 console.log(dog.fullName);
 console.log(dog);