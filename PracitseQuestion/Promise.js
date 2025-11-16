// we will learn Promises in JavaScript
// a promise is an object that may produce a single value in the future

const mypromise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 3) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});


mypromise.then((message)=>{
    console.log("This is in the then " + message);
}).catch((error) =>{
    console.log("This is in the catch " + error);
})

// we will see async await in the next code

// async function myfunction(){
//     return "Hello";
// }
// they are use to handle promise more easily

function Userdata()
{
    
}