var b = document.querySelector("button");
b.addEventListener("click",change);
var i = Math.floor(Math.random()*500)+1;
var j = Math.floor(Math.random()*500)+1;
function change()
{
    b.style.left = i+"px";
    b.style.top = j+"px";
}