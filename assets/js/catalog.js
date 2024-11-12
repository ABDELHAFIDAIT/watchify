// ***************************************************************  Variable names
let gridProduit=document.getElementById('produit');

const dataProduct=[];
// ***************************************************************  Fonctions ********************************

function deselectOtherCheckboxes(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="marque"]');
        checkboxes.forEach(checkbox => {
      if (checkbox !== selectedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
// ///////////////////////////////////////////////////////////////////////////////////////////////////
fetch('http://localhost:3000/products')
  .then(res => res.json())
  .then(data => {
    const limitedProducts = data.slice(0, 8);
    const productContainer = document.getElementById('produits_container');
    productContainer.innerHTML = '';

    limitedProducts.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card', 'p-4', 'shadow-md', 'rounded-md', 'text-center');

      productCard.innerHTML = `
        <div class="rounded-lg shadow-md p-4 h-[400px] flex flex-col">
          <img src="${product.images[0]}" alt="${product.name}" class="w-full h-40 object-contain rounded-md mb-2">
          <h3 class="text-sm font-semibold text-gray-800 h-9 overflow-hidden">${product.name}</h3>
          <p class="text-gray-600 text-xs h-fit overflow-hidden flex-grow">${product.short_description}</p>
          <p class="text-blue-600 font-bold h-[30px]">${product.price}</p>
          <div class="mt-auto">
            <a href="details.html?id=${product.id}" class="w-full block">
              <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Ajouter au panier</button>
            </a>
          </div>
        </div>
      `;
      productContainer.appendChild(productCard);
    });
  });



// *************************************************************** Event handlers ********************************





