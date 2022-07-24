const form = document.querySelector('.form');
const amountElement = document.getElementById('amount')
const percentElement = document.getElementById('twenty-percent')
const totalElement = document.getElementById('total')

form.addEventListener('mouseout', () => {
    let value = +amountElement.value
    if(isNaN(value)) {
        value = 0
    }
    const percentage = 0.2 * value
    const total = value + percentage 
    percentElement.innerText = `20% of value: ${percentage}`
    totalElement.innerText = `Total: ${value}+${percentage} = ${total}`
})
