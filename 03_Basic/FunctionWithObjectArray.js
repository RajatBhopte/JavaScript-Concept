// passing array and object as parameter in functino

function getStudentDetails(students) {
    for (let i = 0; i < students.length; i++) {
        console.log(`Student Name: ${students[i].name}, Age: ${students[i].age}`);
    }
}

students = [
    { name: "Rajat", age: 22 },
    { name: "John", age: 23 },
    { name: "Doe", age: 24 }
];

console.log(getStudentDetails(students)); // Student Name: Rajat, Age: 22


/// ... is a rest operator, it is used to pass multiple parameters in function.
// it returens an array of values.
function calculateCarPrice(...num1){
    return num1;
}

console.log(calculateCarPrice(1000, 2000, 3000)); // [1000, 2000, 3000]
