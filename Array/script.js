// Arrays in java

let marks = [87,99,77,90];

let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/marks.length;
console.log(`the avg of total marks is = ${avg}`);

console.log(marks);
console.log(marks.length);

console.log(marks[0]);
marks[3]=88;
console.log(marks);

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);


}


let cities = ["pune","delhi","greaterNoida"];

// for of loop

for(let city of cities){
    console.log(city.toUpperCase());
}