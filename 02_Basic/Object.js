// Object are the key value pair in javascript
// Think of object as a container for storing data
// think of an object as a real world object  like a person
// a car or student --> with their characterstics

let student = {
    
  name: "Rajat",
  age: 22,
  isCodder: true,
  skills: ["html", "css", "js"],
  greet() {
    console.log(`Hello my name is ${this.name}`);
  },
  reversename() {
    return this.name.split("").reverse().join("");
  },
};

// console.log(student.name);
// console.log(student.age);
// console.log(student.isCodder);
// console.log(student.skills);
// console.log(student.greet());

// console.log(student.skills);

// // we can modify the object
// student.age = 23;
// student.isCodder = false;
// student.skills.push("React");
// student.skills.splice(0, 1);
// // console.log(student);
// console.log(student.skills);
// console.log(student.reversename());

const {name , age , isCodder , hindi} = student;
console.log(`Name : ${name} Age : ${age} isCodder : ${isCodder}`); // Name : Rajat Age : 22 isCodder : true

