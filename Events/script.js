// Event handling in  javascript //

// event handling in js > inline handling in html 

let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click",(e)=>{  // node.addEventListener(event,callback)
//     console.log("button1 was clicked");  // event listener(event,callback)
//     console.log(e.type);  // 

// node.removeEventListener(event, callback);

// const button1 =()=>{
//     console.log("button1 was clicked");
//     btn1.removeEventListener("click",button1);
// }
// })

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};
let div = document.querySelector("div");



div.onmouseover=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);

}


               