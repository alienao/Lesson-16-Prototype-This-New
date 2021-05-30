// 5.Baby Constructor
// Write a Baby constructor subclassing Person.
// Besides name and age, Baby takes a third argument to initialize favoriteToy.
// Besides the methods on Person.prototype, babies have the ability to .play():
// Should return a string "Playing with x", x being the favorite toy.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = (food) => {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    } else {
      return "Must poop";
    }
  };
  this.poop = function () {
    this.stomach = [];
  };
  this.toString = function () {
    return `${this.name}, ${this.age}`;
  };
}

function Baby(favoriteToy, ...properties) {
  Person.call(this, ...properties);
  Baby.prototype = Object.create(Person.prototype);
  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `Playing with ${this.favoriteToy}`;
  };
}

// console.log(Baby.prototype);
let doll = new Baby("Barbie", "Ann", 5);
console.log(doll);
