import {
	addProductToCart,
	addMoreQuantityToProductInCart,
	removeQuantityOffProductInCart,
	removeProductFromCart,
} from './../../store/modules/cart'
import { ToastsStore } from 'react-toasts'
function CartFactory() {
	function isEmpty(cart) {
		if (cart.length === 0) return true
		return false
	}

	async function addProduct(dispatch, quantity, product) {
		await dispatch(
			addProductToCart({
				...product,
				quantity,
			}),
		)
		ToastsStore.info(`${product.title} adicionado ao Carrinho`)
	}

	async function removeProduct(dispatch, product) {
		await dispatch(removeProductFromCart(product.id))
	}

	async function addMoreQuantityToProduct(dispatch, quantity, product, units) {
		removeProduct(dispatch, product)
		await dispatch(
			addMoreQuantityToProductInCart({
				...product,
				quantity: quantity + units[product.unit],
			}),
		)
	}

	async function removeQuantityFromProduct(dispatch, quantity, product, units) {
		removeProduct(dispatch, product)
		await dispatch(
			removeQuantityOffProductInCart({
				...product,
				quantity: quantity - units[product.unit],
			}),
		)
	}

	return {
		addProduct,
		isEmpty,
		addMoreQuantityToProduct,
		removeProduct,
		removeQuantityFromProduct,
	}
}
export default CartFactory
