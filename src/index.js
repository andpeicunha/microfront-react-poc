import { faker } from '@faker-js/faker'

let products = ''
const randomName = faker.person.fullName() // Rowan Nikolaus

for (let i = 0; i < 5; i++) {
	const name = faker.commerce.productName()
	const price = faker.commerce.price()
	products += `<div>${name} | ${price}</div>`
}

console.log(products, randomName)
document.querySelector('#dev-products').innerHTML = products
