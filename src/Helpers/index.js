export const isProductInCart = (cart, productId) =>
	cart.map((product) => product.id === productId)

export const addQuantityToProductInCart = (cart, productId, qtd) => {
	const product = cart
		.filter((product) => product.id === productId)
		.map((product) => product.quantity + qtd)

	console.log(product)
}
export const removeQuantityOffProductInCart = (cart, productId, qtd) => {
	const product = cart
		.filter((product) => product.id === productId)
		.map((product) => -product.quantity + qtd)

	console.log(product)
}
