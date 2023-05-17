// STEP 1
// class Cat {
//     constructor();
// }

// const Dog = class {
//     constructor();
// }

// STEP 2
// let instanceCat = new Cat();
// let instanceDog = new Dog();

// STEP 3
// class Animal {
//     constructor();
//     message = function() {
//         console.log('The Animal has been craeated');
//     }
// }
// const pink = new Animal();

// STEP 4
// class Animal {
//     constructor(animalType) {
//         this.animalType = animalType;
//     };
//     message = function() {
//         console.log(`The ${this.animalType} has been created`);
//     }
// }
// const pink = new Animal('Cat');

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     };
// }
// const pink = new Animal('cat','normal','gray','1 foot', '1.5 feet');

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     };
// }
// const pink = new Animal('cat','normal','gray','1 foot', '1.5 feet');

// for (property in pink) {
//     console.log(property);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     };
//     speak = function() {
//         if (this.type == 'dog') {
//             console.log(`The ${this.color} dog is barking`);
//         } else if (this.type == 'cat') {
//             console.log(`The ${this.color} cat is meowing`);
//         }
//     }
// }
// const pink = new Animal('cat','normal','gray','1 foot', '1.5 feet');
// pink.speak();

// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//     };
//     checkType = function() {
//         if (this._type == 'dog') {
//             return 'dog';
//         } else {
//             return 'cat';
//         }
//     }
//     speak = function() {
//         return console.log(`The ${this.checkType()} has made a noise`);
//     }
// }
// const pink = new Animal('cat','normal','gray','1 foot', '1.5 feet');
// pink.speak();

// STEP 9
String.prototype.findWords = function(word) {
    console.log(this.split(word).length -1);
}
'Hello my name is ANtonio and isnt it a nice island day'.findWords('is');