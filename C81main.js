canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 4;
ctx.rect(380,330,50,50);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 4;
ctx.rect(mouseX,mouseY,50,50);
ctx.stroke();
}
function clearcanvas(){
    ctx.clearRect(0,0,800,700);
}
