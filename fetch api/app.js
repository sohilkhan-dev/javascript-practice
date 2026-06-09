const URL = "https://cat-fact.herukoapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async()=>{
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);// jason format
    let data = response.jason();
    factpara.innerText=data[2].text;


}

btn.addEventListener("click",getFacts);