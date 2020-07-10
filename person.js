class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My Name Is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
