

let imagelist=[
{
    imageurl:"1.jpg",
    content:"Dom practical 2 slider #1"
},
{
    imageurl:"2.jpg",
    content:"Dom practical 2 slider #2"
},
{
    imageurl:"3.jpg",
    content:"Dom practical 2 slider #3"
},
{
    imageurl:"4.jpg",
    content:"Dom practical 2 slider #4"
},

]
let index=0 
let hero_banner = document.querySelector('.hero_banner');
let leftBtn=document.querySelector(".hero_banner i:nth-child(1)")
let rightBtn=document.querySelector(".hero_banner i:nth-child(2)")
let hcontent=document.querySelector(".overlay h1")
 

leftBtn.addEventListener("click",function(e){
    index++;
    if(index==4)
    {
index=0;
    }
    
    hero_banner.style.backgroundImage=`url(images/${imagelist[index].imageurl})`
    hcontent.innerHTML=imagelist[index].content;
 
    

}) ;

rightBtn.addEventListener("click",function(e){
    index--;
    
    if(index==-1)
    {
        index=3;
    }
    
hero_banner.style.backgroundImage=`url(images/${imagelist[index].imageurl})`
 hcontent.textContent=`${imagelist[index].content}`;
 

}) ;

 





















