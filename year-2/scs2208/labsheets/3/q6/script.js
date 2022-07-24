const squaredForm = document.querySelector('.form');

squaredForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(squaredForm);
    const squared = Number(formData.get('squared'));
    alert(`Square root of ${squared} = ${Math.sqrt(squared)}`);
})
