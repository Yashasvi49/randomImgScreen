const btn = document.querySelector("button")
let arr =[
    "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1553336972-6af0053243a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1680742443429-29c93d33138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdWRzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1668091148044-056cd744e64a?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function random(){
let randomX =Math.floor( Math.random()*95)
let randomY =Math.floor( Math.random()*95)
let rotate =Math.floor( Math.random()*360)
return {randomX , randomY, rotate}
}

btn.addEventListener("click",()=>{
let img = document.createElement("img")
  

img.setAttribute("src",  arr[Math.floor(Math.random()*arr.length)] )

let { randomX , randomY, rotate} = random()
img.style.height = "100px"
img.style.width ="100px"
img.style.position ="absolute"
img.style.top  =   randomX + "%"
img.style.left =randomY + "%"
img.style.rotate =rotate + "deg"
img.style.borderRadius = "50%"
document.body.appendChild(img)
})