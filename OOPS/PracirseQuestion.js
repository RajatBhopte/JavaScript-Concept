class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introdouce() {
    console.log(`Hii my name is ${this.name} and my age is ${this.age}`);
  }
}

class Student extends Person {
  #marks = [];
  constructor(name, age) {
    super(name, age);
  }
  addmarks(mark) {
    if (mark >= 0 && mark <= 100) {
      this.#marks.push(mark);
    }
  }
  getAverage() {
    let temp = this.#marks;
    let Totalsum = temp.reduce((acc, curr) => acc + curr, 0);

    return Totalsum /temp.length;
  }
  getmarkscount(){
    return this.#marks.length;
  }
  introdouce() {
    console.log(
      `Hii my name is ${this.name} , My age is ${
        this.age
      } and Average marks ${this.getAverage()}`
    );
  }
}

let s1 = new Student("Rajat", 22);
s1.addmarks(90);
s1.addmarks(100);
s1.addmarks(85);
s1.introdouce();
console.log(s1.getmarkscount())
