const inp=document.querySelector("#inp");
const btn=document.querySelector(".btn");
const ul=document.querySelector("ul");

 

 btn.addEventListener("click",()=>{
    if(!inp.value==""){  
const child=document.createElement("li")
child.innerHTML=inp.value
ul.appendChild(child)
inp.value=""
    }
 })

