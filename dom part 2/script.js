// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","new class"));

// // let div = document.querySelector("div");
// // console.log(div);

// div.style.backgroundColor="purple";
// div.style.color="red";
// div.innerText="Hello !";

// let newbtn = document.createElement("button");

// newbtn.innerText="click me!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);

let newheading = document.createElement("h1");
newheading.innerHTML="<i> Hii ! I am new here </i>";
document.querySelector("body").prepend(newheading);
