document.addEventListener('DOMContentLoaded' ,function(){
    let products = document.querySelector('.products')
    async function fetchproducts(url){
    let data = await fetch(url);
    let response = await data.json();
    console.log(response)
     
    for (let i= 0; i < 3; i++) {
        let description = response[i].description;
        products.innerHTML  += `

                <div class="product">
                 <div class="flex flex-col items-center max-w-xs md:max-w-sm lg:max-w-md p-5 bg-slate-100 rounded-md gap-2">
                  <img class="w-full h-48 md:h-56 lg:h-64 object-fill" src="${response[i].images[0]}" alt="produit">
                    <h4 id="product-name" class="text-base md:text-lg lg:text-xl font-semibold capitalize">${response[i].name}</h4>
                      <h5 class="text-sm md:text-base lg:text-lg font-semibold">$<span id="d-product-price">${response[i].price}</span></h5>
                         <button type="button" id="d-add-to-cart_btn"
                           class="bg-blue-600 px-4 py-1 text-white rounded-md text-center hover:bg-[#183876] transition-colors ease-in-out">
                          Ajouter Au Panier
                           </button>
                   </div>
               </div>

    `
    }
    
    };

    fetchproducts('http://localhost:3000/produits');

})

document.addEventListener('DOMContentLoaded', function () {
    let productsContainer = document.querySelector('.products6');
    let currentPage = 1;
    const itemsPerPage = 5;

    async function fetchProducts(url) {
        let response = await fetch(url);
        let data = await response.json();

        let totalProducts = data.length;
        let totalPages = Math.ceil(totalProducts / itemsPerPage);
        
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const currentItems = data.slice(start, end);

        productsContainer.innerHTML = '';
        currentItems.forEach(product => {
            productsContainer.innerHTML += `
                <div class="product ">
                    <div class="flex flex-col items-center max-w-[250px] p-5 bg-slate-100 rounded-md gap-2">
                        <img class="w-[100%]" src="${product.images[0]}" alt="produit" style="height:200px;width:200px;object-fit:fill">
                        <h4 id="product-name" class="text-[1rem] font-semibold capitalize">${product.name}</h4>
                        <h5 class="text-[0.9rem] font-semibold">$<span id="d-product-price">${product.price}</span></h5>
                        <button type="button" id="d-add-to-cart_btn"
                            class="bg-blue-600 px-4 py-1 text-white rounded-md text-center hover:bg-[#183876] transition-colors ease-in-out">
                            Ajouter Au Panier
                        </button>
                    </div>
                </div>
            `;
        });

        document.getElementById("page-numbers").textContent = `Page ${currentPage} of ${totalPages}`;

        document.getElementById("prev").disabled = currentPage === 1;
        document.getElementById("next").disabled = currentPage === totalPages;
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            fetchProducts('http://localhost:3000/produits');
        }
    }

    function nextPage() {
        currentPage++;
        fetchProducts('http://localhost:3000/produits');
    }

    document.getElementById("prev").addEventListener("click", prevPage, false);
    document.getElementById("next").addEventListener("click", nextPage, false);

    fetchProducts('http://localhost:3000/produits');
});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        nav:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
    });
  });






