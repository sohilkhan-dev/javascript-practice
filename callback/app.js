

// synchronous and asynchronous

// console.log("one");
// console.log("two");

// function hello(){
//     console.log("hello");
// }
//  setTimeout(hello,3000);  // 1second = 1000ms

//  setTimeout(()=>{
//     console.log("another hello");  //this is asynschronous 
//  },3000);


//  console.log("four");
// console.log("five");

// // callback: a callback is a functin passed an argument to another function;

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// calculator(1,2,sum);
// // calculator(1,2,(a,b)=>{
// //     console.log(a+b);
// // });

// const hello1 = ()=>{  // hello1 is a callback in setTimeout 
//     console.log("hello1");
// }
// setTimeout(hello1,5000);

// callback hell : nested callbacks stacked below one another forming a pyramid structure(pyramid of doom)
// this style of programming becomes difficult to understand and manage

// function getData(dataId,getNextData){
//     // 2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();

//         }
//     },2000);
// }

// // callback hell
// getData(1,()=>{
//     console.log("getting data2....");
//     getData(2,()=>{
//         console.log("getting data3...");
//         getData(3,()=>{
//             console.log("getting data4....");
//             getData(4);
//         })
        
//     })
// })


// // async wait > promises > callback hell


// //promises : promise is for "eventual" completion of TaskController. It is an object in javascript
// // it is a solution to callback hell

// // let promise = new Promised((resolve,reject)=>{
// //     console.log("fulfilled");
// //     resolve("success");
// // })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");

//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// // promise chain
// console.log("getting data1...");

// getData(1)
// .then((res) => {
//     console.log("getting data2...");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3...");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// });

// Async-await : async always returns a promise;

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);

//         },2000)
//     });
// }

// async function getWeatherData(){
//     await api(); // 1st
//     await api(); // 2nd
// }

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    })
}

// Async-await
async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
    console.log("getting data5....");
    await getData(5);
};