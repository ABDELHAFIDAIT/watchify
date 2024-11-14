<<<<<<< HEAD
// ***************************************************************  Variable names


// ***************************************************************  Fonctions ********************************

function deselectOtherCheckboxes(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="marque"]');
        checkboxes.forEach(checkbox => {
      if (checkbox !== selectedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
// :::::::::::::

fetch('http://localhost:3000/produits')
.then(res => res.json())
.then(data => {
  console.log(data);
})

// *************************************************************** Event handlers ********************************
=======
const { log } = require("console");

// *************************************************************** Event handlers ********************************
let gridProduit = document.getElementById('produit');
let btnNext=document.getElementById('cata_btn_next');
const productContainer = document.getElementById('produits_container');
let min=0
let max=8

let paraGraph=document.getElementById('paragrapher_prix')
let ImageCata=document.getElementById('image-principale')
let i=0;



function deselectOtherCheckboxes(selectedCheckbox) {
  const checkboxes = document.querySelectorAll('input[name="marque"]');
  checkboxes.forEach(checkbox => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    }
  });
}

// function btnNextClike() {

//   fetch('http://localhost:3000/products')
// .then(res => res.json())
//   .then(data => {
//     console.log(data);
    
//   productContainer.innerHTML=""
//     const limitedProducts = data.slice(min+8, max+8);
//     dataProduct.push(...data);
//     console.log(limitedProducts);
//     displayProducts(limitedProducts); 

//   });
// }

function displayProducts(products) {
  productContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
  
    productCard.classList.add('product-card', 'p-4', 'shadow-md', 'rounded-md', 'text-center');
    productCard.innerHTML = `
    <a href="details.html?${product.id}" class="w-full block">
      <div href="details.html?id=${product.id}" class="rounded-lg shadow-md p-4 h-[400px] flex flex-col">
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-40 object-contain rounded-md mb-2">
        <h3 class="text-sm font-semibold text-gray-800 h-9 overflow-hidden">${product.name}</h3>
        <p class="text-gray-600 text-xs h-fit overflow-hidden flex-grow">${product.short_description}</p>
        <p class="text-blue-600 font-bold h-[30px]">${product.price}</p>
        <div class="mt-auto">
          
            <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Ajouter au panier</button>
        
        </div>
      </div>
        </a>
    `;
    productContainer.appendChild(productCard);
  });
}
btnNext.addEventListener('click', btnNextClike);
const dataProduct = []; 


fetch('http://localhost:3000/products')
.then(res => res.json())
  .then(data => {
    const limitedProducts = data.slice(min,max);
    dataProduct.push(...data);
    displayProducts(limitedProducts); 
  });



setInterval(function() {
  console.log(dataProduct);
//   paraGraph.textContent=`${dataProduct[i].price}`
//  ImageCata.src=`${dataProduct[i].images[0]}`
 
 
 i++;
 }, 1000);
>>>>>>> catalogue





