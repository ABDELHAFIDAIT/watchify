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
                    <div class="flex flex-col items-center max-w-[250px] p-5 bg-slate-100 rounded-md gap-2">
                        <img class="w-[100%]" src="${response[i].images[0]}" alt="produit" style="height:200px;width:200px;object-fit : fill">
                        <h4 id="product-name" class="text-[1rem] font-semibold capitalize">${response[i].name}</h4>
                        <h5 class="text-[0.9rem] font-semibold">$<span id="d-product-price">${response[i].price}</span></h5>
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


document.addEventListener('DOMContentLoaded' ,function(){
    let products = document.querySelector('.products6')
    async function fetchproducts(url){
    let data = await fetch(url);
    let response = await data.json();
    console.log(response)
     
    for (let i= 0; i < 5; i++) {
        let description = response[i].description;
        products.innerHTML  += `

                <div class="product">
                    <div class="flex flex-col items-center max-w-[250px] p-5 bg-slate-100 rounded-md gap-2">
                        <img class="w-[100%]" src="${response[i].images[0]}" alt="produit" style="height:200px;width:200px;object-fit : fill">
                        <h4 id="product-name" class="text-[1rem] font-semibold capitalize">${response[i].name}</h4>
                        <h5 class="text-[0.9rem] font-semibold">$<span id="d-product-price">${response[i].price}</span></h5>
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




let scrol =document.querySelector(".category");
let prevbtn= document.getElementById('ac-prev');
let nextbtn =document.getElementById('ac-next');
 let partie1= document.querySelector('.ac-partie1');
 let partie2= document.querySelector('.ac-partie2');














 
// scrol.addEventListener("wheel",(e) => {
//     e.preventDefault();
//     scrol.scrollLeft += e.deltaY;
// })
// nextbtn.addEventListener('click',()=> {
//     nextbtn.style.display = "none";

// })

// prevbtn.addEventListener('click',()=> {
//     prevbtn.style.display = "block";
// })


// console.log(scrol)

// const btn1 = document.querySelector("#crud-modal");
// let isclick = true;
// let btn = function() {
//     if (isclick == 1) {
//         btn1.style.display = "block";
//         isclick = 0;
//     } else {
//         btn1.style.display = "none";
//         isclick = 1;
//     }
// }
