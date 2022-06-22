// const btn=document.querySelector("button");
// function random(number){
//     return Math.floor(Math.random()*(number+1));

// }
// btn.addEventListener("click",()=>{
//     const rndCol=`rgb(${random(255)},${random(255)},${random(0)})`;
//     document.body.style.background=rndCol;
// });
// const button =document.getElementById("order-now")
//const link="http:localhost:3000/categories"
const menu=document.getElementById("category1")
const image=document.getElementById("img")
const category=document.getElementById("food-information")
const thumb=document.getElementById("CategoryThumb")
const description=document.getElementById("CategoryDescription")
const button=document.getElementById("order-now")

fetch("http://localhost:3000/categories")
.then(response=>response.json())
.then(jsonData=>{
    console.log(jsonData)

})
