var cat = {
    name:'fluffy',
    color:'white'
};

/* you can use bracket notation for a property name
   this is not a valid js identifier. example if 
   property names were being created from data entered
   by a user or if they came from json */

cat['eye color'] = 'green'; // property name has a space

console.log(cat['eye color']);