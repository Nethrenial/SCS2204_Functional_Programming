const marksForm = document.querySelector('.form');
const marksText = document.querySelector('.form .form-text');
const subjectInput = document.getElementById('subject')
const marksInput = document.getElementById('marks')

subjectInput.addEventListener('input', () => {
    marksInput.placeholder = `Enter marks for ${subjectInput.value}`
})

marksForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(marksForm);
    const subject = formData.get('subject')
    const marks = Number(formData.get('marks'))
    marksText.innerHTML = marks < 30 ? `Sorry, You have to work hard for ${subject} subject` : `Congrats! You've passed the test.`;
})


