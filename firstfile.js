// console.log("Hello");
// let student = {
//   fullname: "Rahul Kumar",
//   age: 24,
//   isPass: true,
//   cgpa: 8.5,
// };

// Loops If, Else If, let
/*
let grade = prompt("enter marks");
if(grade>=80 && grade<=100){
  console.log("A");
}
else if(grade<80 && grade>=70){
  console.log("B");
}
else if(grade<70 && grade>=60){
  console.log('C');
}
else if(grade<60 && grade>=50){
  console.log('D');
}
else if(grade<50 && grade>=0){
  console.log('F');
}
else console.log('Invalid Marks');

let val, count=0;
for (val of student.fullname){
  count=count+1;
}
console.log(count);

let key;
for (key in student){
  console.log(student.key);
  console.log(student[key]);
}

let gamenum=55;
let num = prompt('Guess Number');

if(num == gamenum){
  console.log('You WON!');
}
else console.log('Incorrect number');
*/


//Strings in JS

//string are immutable in JS, 

// let str='Rahul Kumar';
// console.log(str);
// console.log(str.length);
// console.log(str[6]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());

//Classes & Objects

/*
class User{
  constructor(name, email){
    // console.log("name is: " + name + ", and email is " + email);
    this.name=name;
    this.email=email;
  }
}

class admin extends User{
  constructor(name, email){
    super(name, email);
  }
  edit(){
    data = 'some new data';

  }
}

let student1= new User('Rahul', 'rahul@gmail.com');
let student2= new User('Raj', 'raj@gmail.com');
let admin1 = new admin('teacher', 'teacher@gmail.com'); */

/****************************************************************************************** */

//Callbacks
/*
function getData(dataId, getNextData) {
  setTimeout(() => {               //setTimeout will trigger the fn after 2s 
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000)
}

//callback hell - too complex, alternative is 'Promise Chain'
getData(1, () => {
  console.log("getting data 2......")
  getData(2, () => {
    console.log("getting data 3......")
    getData(3, () => {
      console.log("getting data 4......")
      getData(4);
    });
  });
});
*/


/****************************************************************************************** */

/* Promise in JS
It has three states : Pending, Resolved, Rejected 
*/

/*
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log('I am a promise');
    resolve('success');
    // reject('network error');
  });
};

let promise = getPromise();

promise.then((res) => {                          //promise.then() will execute only when if promise is fulfilled
  console.log('promise fulfilled', res);
});

promise.catch((err) => {                   //promise.catch() will execute if promise is rejected
  console.log('rejected', err);
});
*/

//Promise Chain
/*
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {               //setTimeout will trigger the fn after 2s 
    console.log("data", dataId);
    resolve("success");
  }, 2000)
  });
}

getData(1)              //chain of promise 
.then((res) => {
  console.log("getting data 2......")
  return getData(2);
})
.then((res) => {
  console.log("getting data 3......")
  return getData(3);
})
.then((res) => {
  console.log(res);
});

*/


/****************************************************************************************** */
//async function - await

//await function should always be written inside async f'n

/*
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve("success");
    }, 2000);
  });
}

async function getWeatherData() {
  await api();
  await api();
}
getWeatherData();
*/

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {               //setTimeout will trigger the fn after 2s 
    console.log("data", dataId);
    resolve("success");
  }, 2000)
  });
}

/*
async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
}
getAllData();
*/

// IIFE: Immediatel Invoked Function Expression : - called immedialtely as soon as it is defined
// can be used only once 

(async function () {                         //eg of IIFE
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
}) ();





