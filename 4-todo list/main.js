
var inp=document.querySelector(".inp")
var btn=document.querySelector(".btn")
var ul=document.querySelector(".list-container")
 
 
btn.addEventListener("click",function(){
    if(inp.value==""){

alert("Please enter something")

    }
    else{
    var txt =document.createTextNode(inp.value)   
    var li=document.createElement("li")
    li.appendChild(txt)
    ul.appendChild(li)
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
     
}

inp.value=""
});


 

ul.addEventListener("click",function(e){

if(e.target.tagName=="LI"){

e.target.classList.toggle("checked")
 
}
else if(e.target.tagName=="SPAN"){

e.target.parentElement.remove();


}



},false)

 
 






