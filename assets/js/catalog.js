function deselectOtherCheckboxes(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="marque"]');
        checkboxes.forEach(checkbox => {
      if (checkbox !== selectedCheckbox) {
        checkbox.checked = false;
      }
    });
  }
let btnNext=document.querySelector('btn_next');
let btnPrev=document.querySelector('btn_previous');


