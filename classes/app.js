// class is a program-code template for creating objects

class Toyotacar{
    constructor(brand,mileage){
        console.log("creating a new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    stop(){
        console.log("stop");
    }

    start(){
        console.log("start");
    }
    // setbrand(brand){
    //     this.brand = brand;
    // }
}

let fortuner = new Toyotacar("fortuner",10); // constructor
let lexus = new Toyotacar("lexus",20);
console.log(lexus);
// fortuner.setbrand("fortuner");



// inheritance : inheritance is passing down properties and methods from parent class to child class

class person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class engineer extends person{
    work(){
        console.log("work and build something");
    }
}
let sohil = new engineer();
// console.log(sohil.eat);
// console.log(sohil.sleep);
// console.log(sohil.work);

// super keywork : used to call parent constructor;

// try catch : error handling

let a =10;
let b = 5;

console.log("a+b = ", a+b);

try{
    console.log("a+c=",a+c);
} catch(err){
    console.log(err);
}
console.log("a-b =", a-b);
