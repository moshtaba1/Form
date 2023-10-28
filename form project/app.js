const form = document.querySelector('#form')
const title = document.querySelector('#title')
const price = document.querySelector('#price')
const products = document.querySelector('#products')

const addProduct = (event) => {
    event.preventDefault()

    const productiItem = document.createElement('li')
    const productiInfo = document.createTextNode(`${title.value} - ${price.value}`)
    productiItem.appendChild(productiInfo)

    products.appendChild(productiItem)

    title.value = ''
    price.value = ''
}

form.addEventListener('submit', addProduct)