
let productName=document.querySelector("#productName")
let productCategory=document.querySelector("#productCategory")
let productPrice=document.querySelector("#productPrice")
let productDiscount=document.querySelector("#productDiscount")
let productQuantity=document.querySelector("#productQuantity")
let productDescrption=document.querySelector("#productDescrption")
let searchInput=document.querySelector("#search")
let clearProducts=document.querySelector("#clear")

let addProductbtn=document.querySelector("#addProduct")
let productContainer=[] 

if( localStorage.getItem("products")!==null){

productContainer=JSON.parse(localStorage.getItem("products"))
 displayProduct()
}




function addProduct(){

  
    if(check()){
  
      const Product={
        name:productName.value,
        category:productCategory.value,
        Price:productPrice.value,
        discount:productDiscount.value,
        Quantity:productQuantity.value,
        description:productDescrption.value,
        
        
        
        }
        productContainer.push(Product)
        
        console.log(productContainer);
        localStorage.setItem("products",JSON.stringify(productContainer))
        displayProduct();
        clearInputs()
    }
    else {
      alert("sorry")
    }

 // productCategory.value=""
}


addProductbtn.addEventListener("click",addProduct)
/////////////////////////////////////////////////////
 function displayProduct()
 {
  let newProducts = "";

  for (let index = 0; index < productContainer.length; index++) {
    newProducts += `
      <tr>
        <td>${productContainer[index].name}</td>
        <td>${productContainer[index].category}</td>
        <td>${productContainer[index].Price}</td>
        <td>${productContainer[index].discount}</td>
        <td>${productContainer[index].Quantity}</td>
        <td>${productContainer[index].description}</td>
        <td><button onclick="setForm(${index})" class="btn btn-outline-success update-button">Update</button></td>
        <td><button onclick="deleteProduct(${index})" class="btn btn-outline-danger">Delete</button></td>
      </tr>
    `;
  }

  document.querySelector("#tbody").innerHTML = newProducts;

 
}
//////////////////////////////////////////////////////////////////////////////

function deleteProduct(productIndex){



 productContainer.splice(productIndex,1)
 localStorage.setItem("products",JSON.stringify(productContainer))
displayProduct()
}
///////////////////////////////////////////////////////////////////////////////////
function clearInputs(){

    productName.value=productCategory.value=productPrice.value=productDiscount.value=productQuantity.value=productDescrption.value  =""


}

function search(val){

  let newprod=``
  for (let i = 0; i < productContainer.length; i++) {
   if (productContainer[i].name.toLowerCase().includes(val.toLowerCase()) ) {
     
 
      newprod+=`<tr>
      <td>${productContainer[i].name}</td>
      <td>${productContainer[i].category}</td>
      <td>${productContainer[i].Price}</td>
      <td>${productContainer[i].discount}</td>
      <td>${productContainer[i].Quantity}</td>
      <td>${productContainer[i].description}</td>
      <td><button onclick="setForm(${i})" class="btn  btn-outline-success">Update</button></td>
      <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
       
      </tr>`
      
 
  
   }
  }


  document.querySelector("#tbody").innerHTML=newprod 
  }
 
///////////////////////////////////////////////////////////////////////
let x=0
  function setForm(index){
x=index
 
    productName.value=productContainer[index].name
    productCategory.value=productContainer[index].category
    productPrice.value=productContainer[index].Price
    // console.log(index);
    productDiscount.value=productContainer[index].discount
    productQuantity.value=productContainer[index].Quantity
    productDescrption.value=productContainer[index].description
    document.getElementById("addProduct").style.display="none"
    document.getElementById("UpdateProducts").classList.remove("d-none")
 
 
      }
      ////////////////////////////////////////////////////////////
      
      function updateProduct()
      {
console.log(x);
           productContainer[x].name =productName.value
          productContainer[x].category =productCategory.value
         productContainer[x].Price=productPrice.value
          productContainer[x].discount=productDiscount.value
          productContainer[x].Quantity  =productQuantity.value
          productContainer[x].description =productDescrption.value

          localStorage.setItem("products",JSON.stringify(productContainer))
          displayProduct()
         
   clearInputs()

      }
      UpdateProducts.addEventListener('click',updateProduct);
//////////////////////////////////////////
searchInput.addEventListener("input",()=>{


search(searchInput.value)

})

 
 



  //  clearProducts.addEventListener("click",()=>{

  // localStorage.clear()
  // displayProduct()
  //  })


function check(){
  let rege=/\w+/ig


  if(rege.test(productName.value)){
console.log(productName.value);
return true;

  }
  else {
    return false;
  }
}
 


 
 




  