import { addProductToCart } from './../../store/modules/cart'
import { ToastsStore } from 'react-toasts'
function CartFactory() {
	async function addProduct(dispatch, quantity, product) {
		await dispatch(
			addProductToCart({
				...product,
				quantity,
			}),
		)
		ToastsStore.info(`${product.title} adicionado ao Carrinho`)
	}

	function isEmpty(cart) {
		if (cart.length === 0) return true
		return false
	}

	return {
		addProduct,
		isEmpty,
	}
}
export default CartFactory
