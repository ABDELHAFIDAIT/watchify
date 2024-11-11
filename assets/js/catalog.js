function deselectOtherCheckboxes(selectedCheckbox) {
    const checkboxes = document.querySelectorAll('input[name="marque"]');
        checkboxes.forEach(checkbox => {
      if (checkbox !== selectedCheckbox) {
        checkbox.checked = false;
      }
    });
  }


  