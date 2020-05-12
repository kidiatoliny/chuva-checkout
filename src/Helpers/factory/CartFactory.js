import { addProductToCheckout } from '~/store/modules/cart'
import { ToastsStore } from 'react-toasts'
function CartFactory() {
	async function addToCart(dispatch, quantity, product) {
		await dispatch(
			addProductToCheckout({
				...product,
				quantity,
			}),
		)
		ToastsStore.info(`${product.title} adicionado ao Carrinho`)
	}

	return {
		addToCart,
	}
}
export default CartFactory
