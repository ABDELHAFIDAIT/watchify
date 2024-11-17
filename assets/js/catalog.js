const gridProduit = document.getElementById("produit");
let productContainer = document.getElementById("produits_container");

const btnNext = document.getElementById("cata_btn_next");
const btnPrev = document.getElementById("cata_btn_prev");
const checkboxes = document.querySelectorAll('input[name="marque"]');
let min = 0;
let max = 8;
let AllProduit = [];

let productsToShow = [];

function deselectOtherCheckboxes(selectedCheckbox) {
  checkboxes.forEach((checkbox) => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    }
  });
}

// Fetch product data
fetch("http://localhost:3000/produits")
  .then((res) => res.json())
  .then((data) => {
    AllProduit.push(...data);
    displayProducts(min, max);
  })
  .catch((err) => console.error("Error fetching products:", err));

// Function to display products based on the range
function displayProducts(min, max) {
  productContainer.innerHTML = ""; // Clear the current products before appending new ones

  productsToShow = AllProduit.slice(min, max);

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add(
      "product-card",
      "max-w-[250px]",
      "min-w-[200px]",
      "p-5",
      "shadow-md",
      "rounded-md",
      "text-center",
      "hover:shadow-blue-600",
      "flex",
      "flex-col",
      "gap-2",
      "justify-between",
      "mx-auto"
    );

    productCard.innerHTML = `
      
        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-40 object-contain rounded-md mb-2">
        <a href="details.html?${product.id}"><h3 class="text-sm font-semibold text-gray-800 h-9 overflow-hidden hover:text-blue-600">${product.name}</h3></a>
        <p class="text-gray-600 text-xs h-fit overflow-hidden flex-grow">${product.short_description}</p>
        <p class="text-blue-600 font-bold h-[30px]">${product.price}</p>
        <div class="mt-auto">
          <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Ajouter au panier</button>
        </div>
     
    `;
    productContainer.appendChild(productCard);
  });
}

// "Next" button event listener
btnNext.addEventListener("click", () => {
  if (max < AllProduit.length) {
    min += 8;
    max += 8;
    displayProducts(min, max);
  }
});

// "Prev" button event listener
btnPrev.addEventListener("click", () => {
  if (min > 0) {
    min -= 8;
    max -= 8;
    displayProducts(min, max);
  }
});

// Carousel functionality
let count = 0;
let cata_price_caroussele = document.getElementById("paragrapher_prix");
let cata_image_caroussele = document.getElementById("cata_image_caroussel");

function updateCarousel() {
  if (AllProduit.length > 0) {
    cata_price_caroussele.textContent = `${AllProduit[count].price}`;
    cata_image_caroussele.src = `${AllProduit[count].images[0]}`;
    count++;

    if (count >= AllProduit.length) {
      count = 0;
    }
  }
}

const intervalId = setInterval(updateCarousel, 1000);

function resetCarousel() {
  clearInterval(intervalId);
  setInterval(updateCarousel, 1000);
}

const btnSort = document.getElementById("sort");
btnSort.addEventListener("click", () => {
  switch (btnSort.value) {
    case "price":
      AllProduit.sort((a, b) => b.price - a.price);
      displayProducts(min, max);
      break;
    case "stock":
      AllProduit.sort((a, b) => b.stock - a.stock);
      displayProducts(min, max);
      console.log("Sort stock");
      break;
    default:
      displayProducts(min, max);
      break;
  }
});
