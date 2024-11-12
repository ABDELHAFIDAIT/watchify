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





