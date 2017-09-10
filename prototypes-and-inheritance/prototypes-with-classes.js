class Animal {
    constructor(voice) {
        this.voice = voice || 'growl';
    }

    speak() {
        console.log(this.voice);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super('meeeow');
        this.name = name;
        this.color = color;
    }
    
    clean() {
        console.log('I\'m cleaning myself');
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
    }
}
 
var fluffy = new Cat('fluffy','white');
fluffy.speak();
fluffy.clean();

var april = new Dog('april', 'white');
april.speak(); // default speak behaviour
// april.clean(); this would fail as neither dog not animal have a clean function