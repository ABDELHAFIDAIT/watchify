var totalPanier = 0 ;

var pTotal ;

let arrayPrd = localStorage.getItem('prd').split('-');

arrayPrd.map(Prd => {
    const prd = Prd.split(',');

    fetch(`http://localhost:3000/produits/${prd[0]}`)
    .then(res => res.json())
    .then(product => {
        const pProduct = document.createElement('div');
        pProduct.id = "product-panier";

        pProduct.innerHTML = 
                            `<div id="product-details" class="flex items-center justify-between flex-wrap">
                            <div class="flex  gap-5">
                                <img class="w-32 h-32" src="${product.images[0]}" alt="${product.name}">
                                <div class="w-72 flex flex-col justify-around">
                                    <h1 class="font-bold text-lg">${product.name}</h1>
                                    <h2 class="font-semibold text-xl text-red-600"><span id="unit-price">${product.price}</span> $</h2>
                                </div>
                            </div>
                            <div class="flex" data-id="${prd[1]}">
                                <button id="dec-qtt-btn" class="font-medium text-lg px-4 py-2 rounded-s-sm bg-gray-200" type="button">-</button>
                                <input id="qtt-display" class="outline-none font-medium text-lg py-2 bg-slate-200 text-center w-14" type="number" value="${prd[1]}" min="1" max="${product.stock}">
                                <button id="inc-qtt-btn" class="font-medium text-lg px-4 py-2 rounded-r-sm bg-gray-200" type="button">+</button>
                            </div>
                            <h1 class="font-medium text-xl"><span id="total-price" >${product.price * prd[1]}</span> $</h1>
                            <svg id="delete-product" class="cursor-pointer" width="32px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <hr class="border-gray-400">`;

        document.getElementById("panier-products-container").appendChild(pProduct);

        const tpProduct = document.createElement('div');
        tpProduct.className = 'grid grid-cols-[1fr_80px_80px] gap-3';

        tpProduct.innerHTML = 
        `<h1>${product.name}</h1>
        <h2 class="font-medium mx-5">x <span id="${product.id}">${prd[1]}</span></h2>
        <h3 id="total-${product.id}" class="font-semibold justify-self-end">${product.price * prd[1]}</h3>`;

        document.getElementById('total-panier-products').appendChild(tpProduct);

        totalPanier+= product.price * prd[1];
        
        document.getElementById("total-price-panier").innerText = totalPanier.toFixed(2);

        pProduct.querySelector('#inc-qtt-btn').addEventListener("click", function(){
            document.getElementById("total-price-panier").innerText = "";
            const currentTarget = this.previousElementSibling ;

            if(currentTarget.value < product.stock){
                totalPanier += product.price ;
            }

            currentTarget.value = currentTarget.value<product.stock ? +currentTarget.value +1 : product.stock;

            const currentTargetPrice = currentTarget.parentElement.nextElementSibling;
            currentTargetPrice.innerText = (currentTarget.value * product.price).toFixed(2) + " $";

            document.getElementById(`${product.id}`).innerText = currentTarget.value;
            let variantIncPrice = document.getElementById(`total-${product.id}`);
            variantIncPrice.innerText = (currentTarget.value * product.price).toFixed(2);
        
            document.getElementById("total-price-panier").innerText = totalPanier.toFixed(2);
        })

        pProduct.querySelector('#dec-qtt-btn').addEventListener("click", function(){
            // document.getElementById("total-price-panier").innerText = "";
            const currentTarget = this.nextElementSibling ;

            if(currentTarget.value > 1){
                totalPanier -= product.price ;
            }

            currentTarget.value = currentTarget.value>2 ? +currentTarget.value -1 : 1;

            const currentTargetPrice = currentTarget.parentElement.nextElementSibling;
            currentTargetPrice.innerText = (currentTarget.value * product.price).toFixed(2) + " $";
            
            document.getElementById(`${product.id}`).innerText = currentTarget.value;
            let variantIncPrice = document.getElementById(`total-${product.id}`);
            variantIncPrice.innerText = (currentTarget.value * product.price).toFixed(2);

            
        
            document.getElementById("total-price-panier").innerText = totalPanier.toFixed(2);
        })

    })  
})


const form = document.getElementById('form-devis');



function validateForm(){
    let valid = 1 ;

    const userName = form['name'].value.trim();

    if(userName.length == 0){
        document.getElementById('alert-name').innerText = "(Veuillez donner votre Nom !)";
        valid = 0 ;
    }
    if(userName.length < 10){
        document.getElementById('alert-name').innerText = "(Veuillez donner votre Nom Complet!)";
        valid = 0 ;
    }
    

    const userAdress = form['adress'].value.trim();

    if(userAdress.length == 0){
        document.getElementById('alert-name').innerText = "(Veuillez donner votre Adresse !)";
        valid = 0 ;
    }
    if(userAdress.length < 20){
        document.getElementById('alert-name').innerText = "(Veuillez donner votre Adress Complète !)";
        valid = 0 ;
    }


    const userEmail = form['email'].value;

    if(!userEmail.contains('@')){
        document.getElementById('alert-name').innerText = "(Votre Email doit contenir @ )";
        valid = 0 ;
    }
    if(!userEmail.contains('.com') || !userEmail.contains('.net') || !userEmail.contains('.org') || !userEmail.contains('@')){
        document.getElementById('alert-name').innerText = "(Veuillez donner une extension de domaine valide comme .com !)";
        valid = 0 ;
    }
}



fetch(`http://localhost:3000/produits`)
.then(res => res.json())
.then(products => {
    for(let i=0 ; i<5 ; i++){
        const imgProduct = document.createElement('img');
        imgProduct.src = `${products[i].images[0]}` ;
        imgProduct.className = "w-[200px] h-[200px]" ;
        document.getElementById('interested').appendChild(imgProduct);
    }
})