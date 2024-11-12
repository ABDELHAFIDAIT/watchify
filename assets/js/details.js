const productGalerie = document.getElementById("d-product-galerie");
const imageContainer = document.getElementById("d-image-container");
const productName = document.getElementById("d-product-name");
const productShortDescription = document.getElementById(
  "d-product-short_description"
);
const productPrice = document.getElementById("new-price");
const productBrand = document.getElementById("d-brand");
const productStatus = document.getElementById("d-stock");
var imageBox = document.getElementById("image-box");

//function to get url parameters
// const productId = new URLSearchParams(window.location.search);
// function getUrlParameter(id) {
//   return productId.get(id);
// }

fetch("http://localhost:3000/products")
  .then((responce) => responce.json())
  .then((data) => {
    console.log(data);
    let displayGalerie = () => {
      productGalerie.innerHTML = `<div class="mb-5 flex justify-center" id="d-image-container">
                    <img id="image-box" src="${data[0].images[0]}" alt="product Image"
                        style="width: 100%; max-width: 450px;">
                </div>
                <div class="flex gap-2 justify-center" id="d-image-variants">
                    <div
                        class="d-variant bg-blue-600 rounded-md p-2 cursor-pointer max-w-[100px] max-h-[109px] my-auto">
                        <img src="${data[0].images[0]}" alt="product Image"
                            onclick="switchImages(this)">
                    </div>
                    <div
                        class="d-variant bg-blue-600 rounded-md p-2 cursor-pointer max-w-[100px] max-h-[109px] my-auto">
                        <img src="${data[0].images[1]}" alt="product Image" onclick="switchImages(this)">
                    </div>
                    <div
                        class="d-variant bg-blue-600 rounded-md p-2 cursor-pointer max-w-[100px] max-h-[109px] my-auto">
                        <img src="${data[0].images[2]}" alt="product Image" onclick="switchImages(this)">
                    </div>

                </div>`;
    };
    // productBrand.innerHTML = data[0].marque;

    displayGalerie();
  });

//switch galerie images function
let switchImages = (currentImage) => {
  imageBox.src = currentImage.src;
};
