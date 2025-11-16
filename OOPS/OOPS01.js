// // we are learning about oops in javascipt
// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Personinfo() {
//     console.log(`Hii my name is ${this.name} and My age is ${this.age}`);
//   }
// }

// let personp1 = new person("Rajat", 22);
// personp1.Personinfo();

// class Student {

//     constructor(name , age , dept , rank){
//         this.name = name;
//         this.age = age;
//         this.dept = dept;
//         this.rank = rank;
//     }

//     StudentInformation(){
//         console.log(`Student name is ${this.name}`);
//         console.log(`Student age is ${this.age}`);
//         console.log(`Student dept is ${this.dept}`);
//         console.log(`Student rank is ${this.rank}`);
//     }
// }

// let s1 = new Student("Rajat"  , 22 , "MCA" , 100);
// s1.StudentInformation()

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.brand} is starting...`);
  }
  getDetails() {
    console.log(`Car : ${this.brand} , Year : ${this.year}`);
  }
}

const car1 = new Car("Toyota", "Fortuner", 2021);
car1.start();
car1.getDetails();
