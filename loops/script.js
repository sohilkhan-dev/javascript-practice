console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }
 
// for (const key in obj) {  
//         console.log(key)
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

console.log("hello world")
let d=1;
for(i=0; i<100;i++){
    console.log(d+i);
}

console.log("something is happening");


// for of loops
let size=0;
let str ="JavaScript";
for(let val of str){
    console.log("val=", val);
    size++;
}
console.log("str size=",size);

// for in loop

let student={
    name:"rohan",
    age:24,
    vote:true
};
for(let key in student){
    console.log("key=",key ,"values=",student[key] );
}