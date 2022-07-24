const areaForm = document.querySelector('.form');
const areaText = document.querySelector('.form .form-text');

areaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(areaForm);
    const height = Number(formData.get('height'))
    const width = Number(formData.get('width'))
    areaText.innerHTML = `Area of the rectangle is ${width * height}cm<sup>2</sup>`;
})
