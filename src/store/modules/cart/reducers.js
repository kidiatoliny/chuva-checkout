import * as Types from './types'

export const initialState = {
	products: [],
}

export default function cart(state = initialState, action) {
	switch (action.type) {
		case Types.ADD_PRODUCT_TO_CART: {
			console.log(state)
			let products = action.product

			return {
				...state,
				products: [...state.products, products],
			}
		}
		default:
			return state
	}
}
