import * as Types from './types'

export function addProductToCart(storeId, product) {
	return {
		type: Types.ADD_PRODUCT_TO_CART,
		product,
		storeId,
	}
}
