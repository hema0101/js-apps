



let turn='x';
let title=document.querySelector('.title')
let squares =[]

function end(num1,num2,num3)
{

document.querySelector("#item"+num1).style.backgroundColor="#000"
document.querySelector("#item"+num2).style.backgroundColor="#000"
document.querySelector("#item"+num3).style.backgroundColor="#000"

 title.textContent= `${squares[num1]} is winner`
setInterval(() => {
    title.textContent+="."
}, 1000);
setTimeout(() => {
    location.reload();
}, 3000);
  }





 

 

function winner() {

for (let i=1; i<10;i++) {


squares[i]=document.getElementById(`item${i}`) .innerHTML 


}

 if(squares[1]==squares[2]&&squares[2]==squares[3]&&squares[1]!="")
{
    end(1,2,3);
}
else  if(squares[4]==squares[5]&&squares[5]==squares[6]&&squares[4]!="")
{
    end(4,5,6);
}
else  if(squares[7]==squares[8]&&squares[7]==squares[9]&&squares[9]!="")
{
    end(7,8,9);
}
////////////////////////////////////////////////////////////////////////////////////
else if(squares[1]==squares[4]&&squares[4]==squares[7]&&squares[1]!="")
{
    end(1,4,7);
}
else  if(squares[2]==squares[5]&&squares[5]==squares[8]&&squares[5]!="")
{
    end(2,5,8);
}
else  if(squares[3]==squares[6]&&squares[6]==squares[9]&&squares[9]!="")
{
    end(3,6,9);
}
///////////////////////////////////////////////////////////////////
else  if(squares[1]==squares[5]&&squares[5]==squares[5]&&squares[9]!="")
{
    end(1,5,9);
}
else  if(squares[3]==squares[5]&&squares[7]==squares[5]&&squares[5]!="")
{
 end(3,5,7);

}

}
 
 
function game(id){
let element=document.getElementById(id);

    if(turn=='x'&&element.textContent=='')
 {
element.innerHTML='X'
turn='O'
title.textContent='O'
}

else if(turn=='O'&&element.textContent=='')
{

    element.innerHTML='O'
    turn='x'
    title.textContent="X"
}
winner();
}

























