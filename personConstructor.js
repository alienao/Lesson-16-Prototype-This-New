// 3.Write a Person Constructor that initializes name and age from arguments.
// All instances of Person should initialize with an empty stomach array.
// Give instances of Person the ability to .eat("someFood"):
// When eating an edible, it should be pushed into the stomach.
// README.md 5/20/2021
// 2 / 3
// The eat method should have no effect if there are 10 items in the stomach.
// Give instances of Person the ability to .poop():
// When an instance poops, its stomach should empty.
// Give instances of Person a method .toString():
// It should return a string with name and age. Example: "Mary, 50"
function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
  this.eat = function (food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };
  this.poop = function () {
    this.stomach = [];
  };
  this.toString = function (name, age) {
    return `${this.name} ${this.age}`;
  };
}
let person = new Person("Mary", 50);
console.log(person.toString());
