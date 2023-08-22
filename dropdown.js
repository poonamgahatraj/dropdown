let list=document.getElementById("1")
list.addEventListener("mouseover",displayLink)

function displayLink (){
let list2=document.getElementById("2")
list2.style.display="block";

}


let list1=document.getElementById("3")
list1.addEventListener("mouseover",removeLink)

function removeLink (){
let list2=document.getElementById("2")
list2.style.display="none";

}
