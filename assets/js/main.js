const menu = document.getElementById("nav-menu");
const menu_icon = document.getElementById("menu-icon");
const close_icon = document.getElementById("close-menu_icon");

let ToggleMenu = () => {
  menu.style.top = "80px";
  menu_icon.style.display = "none";
  close_icon.style.display = "block";
};
let closeMenu = () => {
  menu.style.top = "-100vh";
  menu_icon.style.display = "block";
  close_icon.style.display = "none";
};

menu_icon.addEventListener("click", ToggleMenu);
close_icon.addEventListener("click", closeMenu);

//==========================================================

// localStorage.setItem("prd");

// var pCounter = localStorage.getItem("count")
//   ? parseInt(localStorage.getItem("count"))
//   : 0;

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("Product-counter").innerText = pCounter;
// });
// //-------------------------------------------
// function ajouterAuPanier(id, Quantity) {
//   let product = localStorage.getItem("prd");

//   if (!product || product === "") {
//     product = `${id},${Quantity}`;
//   } else {
//     product += `-${id},${Quantity}`;
//   }

//   localStorage.setItem("prd", product);

//   pCounter++;
//   localStorage.setItem("count", pCounter); // Save updated counter to localStorage
//   document.getElementById("Product-counter").innerText = pCounter;
// }

const popup = document.getElementById("popUp");
function ajouterAuPanier(id, quantity) {
  let product = localStorage.getItem("prd");

  if (!product || product === "") {
    product = `${id},${quantity}`;
  } else {
    product += `-${id},${quantity}`;
  }

  localStorage.setItem("prd", product);
  popup.classList.remove("hidden");
}
