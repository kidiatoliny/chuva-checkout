export const isProductInCart = (cart, productId) =>
	cart
		.filter((product) => product.id === productId)
		.map((product) => product.id)

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
