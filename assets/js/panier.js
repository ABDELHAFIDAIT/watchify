const increaseQtt = document.getElementById("inc-qtt-btn");
const decreaseQtt = document.getElementById("dec-qtt-btn");
const fieldQtt = document.getElementById("qtt-display");
const totalPrice = document.getElementById("total-price");

var totalPanierQtt= document.getElementById('total-panier-qtt') ; //id="total-panier-qtt"



const deleteProduct = document.getElementById("delete-product");

var unitPrice = document.getElementById("unit-price").textContent;
var fieldQttValue = fieldQtt.value ;



increaseQtt.onclick = function(){
    fieldQttValue++;
    fieldQtt.value = fieldQttValue;

    unitPrice = parseFloat(unitPrice).toFixed(2);
    totalPrice.innerText = (unitPrice * fieldQttValue).toFixed(2) ;
}


decreaseQtt.onclick = function(){
    if(fieldQtt.value >1){
        fieldQttValue--;
        fieldQtt.value = fieldQttValue;

        unitPrice = parseFloat(unitPrice).toFixed(2);
        totalPrice.innerText = (unitPrice * fieldQttValue).toFixed(2) ;
    }
}


deleteProduct.onclick = function(){
    if(confirm("Voulez-vous vraiment supprimer ce produit du panier?")){
        document.getElementById('product-panier').classList.add('hidden');
    }
}