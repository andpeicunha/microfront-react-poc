import { faker } from '@faker-js/faker'
import './style.css'

let products = ''
const randomName = faker.person.fullName() // Rowan Nikolaus

for (let i = 0; i < 5; i++) {
	const name = faker.commerce.productName()
	const price = faker.commerce.price()
	products += `<div class="p-3">${name} | ${price}</div>`
}

document.querySelector('#dev-products').innerHTML = products
