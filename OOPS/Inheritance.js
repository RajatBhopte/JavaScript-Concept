// we are learning about inheritance in js
/* Inheritance mean a child class inherit the properties of parent class */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    console.log(`Hello my name is  ${this.name} and  My age is ${this.age}`);
  }
}

// we use super key word to user parent class constructor to intialize child  class value

class Student extends Person {
  // Studnet class has three field like name , age , course
  // to initalize name and age we use Person class constructor using key word super
  constructor(name, age, course) {
    super(name, age); // call parent class constructor
    this.course = course;
  }

  study() {
    console.log(`I am studying ${this.course}`);
  }
}

let s1 = new Student("Rajat", 22, "Computer Science");
s1.getDetails();
s1.study();
