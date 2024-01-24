import faker from 'faker'

const cartText = `<div>Você tem ${Math.floor(Math.random(10000) * 100)} item(s) no seu carrinho</div>`

document.querySelector('#dev-card').innerHTML = cartText