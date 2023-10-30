 const imageContainer=document.querySelector('.image img');

const imageList=document.querySelectorAll('.image-list img');

// console.log(imageList );
// console.log(imageContainer );


for(let i=0; i<imageList.length; i++) {

imageList[i].addEventListener( 'click', function(e){
let imageSrc=e.target.getAttribute("src")
//    console.log( imageContainer.setAttribute("src",e.target.getAttribute("src")));
// console.log(imageSrc);
 imageContainer.setAttribute("src",imageSrc)
})



}
























































