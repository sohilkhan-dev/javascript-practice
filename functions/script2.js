console.log("hello world");

// functions : Block of code that performs a special task

function myfunction(){
    console.log("We are learning js ");
    console.log("I am becoming a mern stack developer");

}

myfunction();
myfunction();

function sum(a, b){
    sum=a+b;
    return sum;
}
sum(2,4);
console.log("the sum of a and b is = " + sum);

//for each fucntion means callback fucntion;

let arr=["delhi","pune","mumbai"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr)
});


// map method

let nums=[45,55,33,34];

let newarr=nums.map((val)=>{
    return val*val;
});
console.log(newarr);

// filter function

let arry=[2,4,3,2,6,7,9,78];

let evenarr=arry.filter((val)=>{
    return val%2!==0;
});
console.log(evenarr)

