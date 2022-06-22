const menu=document.getElementById("category1")
const image=document.getElementById("img")
const category=document.getElementById("category")
const thumb=document.getElementById("CategoryThumb")
const description=document.querySelector(".information")
const button=document.getElementById("order-now")

function displayFood(foodObj){
    //category.innerText=foodObj.food-information
    // image.innerText=foodObj.img
    category.innerText=foodObj.Category
    description.innerText=foodObj.CategoryDescription
    image.src=foodObj.CategoryThumb
}
fetch("http://localhost:3000/categories")
.then(response=>response.json())
.then(jsonData=>{
    //console.log(jsonData)
displayFood(jsonData[0])
displayMeal(jsonData)
})  
function displayMeal(arrayOfMeals){
    arrayOfMeals.forEach(foodObj=>{
        const li=document.createElement("li")
        li.className="food-category"
        li.innerText=foodObj.Category
        menu.append(li)
        li.addEventListener("click",()=>{
            displayFood(foodObj)
        })
    })
}
function buttonClick(button){
    button.addEventListener("click", (e)=>{
        alert("Your have successfuly made an order.")
    })

}
