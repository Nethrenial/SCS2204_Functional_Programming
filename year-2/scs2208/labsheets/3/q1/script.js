const addressForm = document.querySelector('.form');

addressForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(addressForm);
    const address = {
        name: formData.get('name'),
        hometown: formData.get('hometown'),
    };
    alert(`Name: ${address.name}\nHometown: ${address.hometown}`);
})
