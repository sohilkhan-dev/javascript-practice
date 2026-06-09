// prototype in javascript

// A javascript object is an entity having state and behavior (properties and method);
// js objects have a special property called prototype.

const student = {
    fullName: "sohil",
    marks: 78,

    printMarks: function () {
        console.log("marks:", this.marks);
    },
};

student.printMarks();


const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    }
};

const karan = {
    salary:5000,
    calcTax(){
        console.log("tax rate is 20%");  // it will update not employee tax
    }

};
const karan2 = {
    salary:5000,

};
const karan3 = {
    salary:5000,

};

karan.__proto__=employee; // we can set prototype using __proto__
karan2.__proto__=employee;
karan3.__proto__=employee;