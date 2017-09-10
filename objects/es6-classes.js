class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log('meeeeow');
    }
}

var cat = new Cat('fluffy', 'white');

console.log(cat);

cat.speak();