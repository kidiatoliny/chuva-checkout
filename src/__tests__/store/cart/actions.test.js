/* eslint-disable no-undef */
import {
	addProductToCart,
	removeProductFromCart,
} from './../../../store/modules/cart'

describe('Cart Actions', () => {
	describe('Actions Creators', () => {
		test('should be return a ACTION CREATOR addProductToCart {type:ADD_PRODUCT_TO_CART}', () => {
			expect(addProductToCart()).toEqual({ type: 'ADD_PRODUCT_TO_CART' })
		})

		test('should be return a ACTION CREATOR removeProductFromCart {type:REMOVE_PRODUCT_FROM_CART}', () => {
			expect(removeProductFromCart()).toEqual({
				type: 'REMOVE_PRODUCT_FROM_CART',
			})
		})
	})
})
