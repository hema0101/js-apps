 
let el=document.querySelector(".scroller")

let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;


console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);

console.log(height);


addEventListener("scroll",() => {
let scrollTop=document.documentElement.scrollTop
 el.style.width= `${(scrollTop/height)*100  }%`

});

































































