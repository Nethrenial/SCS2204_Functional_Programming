const packageCheckBoxes = document.querySelectorAll(".package-check");

function disableAllExceptOne(enabled) {
  packageCheckBoxes.forEach((box) => {
    if (box !== enabled) {
      box.disabled = true;
      box.parentElement.classList.add('disabled')
    }
  });
}

function enableAll() {
  packageCheckBoxes.forEach((checkBox) => {
    checkBox.disabled = false;
    checkBox.parentElement.classList.remove('disabled')
  });
}

packageCheckBoxes.forEach((checkBox) => {
  checkBox.addEventListener("change", (e) => {
    if (checkBox.checked) {
      disableAllExceptOne(checkBox);
    } else {
      enableAll()
    }
  });
});
