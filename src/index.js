const menu=document.getElementById("category1")
const image=document.getElementById("img")
const category=document.getElementById("category")
const thumb=document.getElementById("CategoryThumb")
const description=document.getElementById("CategoryDescription")
const button=document.getElementById("order-now")


function displayFood(foodObj){
    //category.innerText=foodObj.food-information
    // image.innerText=foodObj.img
    category.innerText=foodObj.category
    thumb.innerText=foodObj.CategoryThumb
    description.innerText=foodObj.CategoryDescription

    CategoryThumb.src=foodObj.CategoryThumb
    
}
fetch("http://localhost:3000/categories")
.then(response=>response.json())
.then(jsonData=>{
    //console.log(jsonData)
displayFood(jsonData[0])
const foodList =document.getElementById("category1")
jsonData.forEach(foodObj=>{
    const li=document.createElement("li")
    li.className="food-category"
    li.innerText=foodObj.category1
    foodObj.append(li)
    li.addEventListener("click",()=>{
        displayFood(foodObj)
    })
})
})  