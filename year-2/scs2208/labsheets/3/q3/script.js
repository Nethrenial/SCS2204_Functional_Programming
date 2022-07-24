const birthdayForm = document.querySelector('.form');


const getAge = (birthdate)  => new Date().getFullYear() - new Date(birthdate).getFullYear();

birthdayForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(birthdayForm);
    const birthday = {
        name: formData.get('name'),
        date: formData.get('birthday'),
    };
    alert(`Name: ${birthday.name}\nAge: ${getAge(birthday.date)}`);
})

