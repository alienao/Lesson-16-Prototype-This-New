//2. Create a method in the Person class which returns how another person's age compares. Given the instances
// p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following
// format:
// {other person name} is {older than / younger than / the same age as} me.

// const p1 = Person("Samuel", 24)
// const p2 = Person("Joel", 36)
// const p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

function Person(name, age) {
  this.name = name;
  this.age = age;
  function compareAge(obj) {
    if (this.age > obj.age) {
      return `${obj.name} is younger than me `;
    }
    if (this.age < obj.age) {
      return `${obj.name} is older than me `;
    }
    if (this.age === obj.age) {
      return `${obj.name} is the same age as me `;
    }
  }
  return {
    name: this.name,
    age: this.age,
    compareAge,
  };
}

const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);
console.log(p1.compareAge(p3));
