function show(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.add("hidden")
})

document.getElementById(id).classList.remove("hidden")

}

function noDate(){
document.getElementById("response").innerText="Oops babuu try again 🥺"
}

function yesDate(){
show("cakePage")
}

function cutCake(){
startFireworks()
}

function openLetter(){
show("letterPage")
}

function moviePage(){
show("moviePage")
}

function foodPage(){
show("foodPage")
}

function loveQuestion(){
show("lovePage")
}

function ghostPage(){
show("ghostPage")
}

function finalPage(){
show("finalPage")
startFinalFireworks()
}


/* FIREWORKS */

function startFireworks(){

let container=document.getElementById("fireworks")

for(let i=0;i<20;i++){

let spark=document.createElement("div")

spark.style.position="absolute"
spark.style.width="6px"
spark.style.height="6px"
spark.style.background="yellow"
spark.style.left=Math.random()*100+"%"
spark.style.top=Math.random()*100+"%"
spark.style.animation="spark 1s linear"

container.appendChild(spark)

setTimeout(()=>spark.remove(),1000)

}

}


/* FINAL FIREWORKS */

function startFinalFireworks(){

let canvas=document.getElementById("finalFireworks")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=400

let particles=[]

for(let i=0;i<120;i++){

particles.push({

x:canvas.width/2,
y:200,
vx:(Math.random()-0.5)*10,
vy:(Math.random()-0.5)*10,
size:Math.random()*4+2

})

}

function animate(){

ctx.fillStyle="rgba(0,0,0,0.2)"
ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy
p.vy+=0.05

ctx.fillStyle="gold"
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

}