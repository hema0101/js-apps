const child=document.querySelectorAll(".child");

 

child.forEach((x)=>{
    x.addEventListener("click",() =>{
        
        const acc=x.nextElementSibling;
       
     
    acc.classList.toggle("hidden")
    acc.classList.remove("ha")
    
 

})




})

 