var cat =  {name: 'fluffy', color: 'white'}

// stuff can be added to object after it is created!!
cat.age = 3;
console.log(cat.name);
console.log(cat.age);

cat.speak = function() {
    console.log('meeeeeow');
}

cat.speak();