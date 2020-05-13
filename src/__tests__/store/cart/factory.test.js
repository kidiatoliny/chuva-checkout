/* eslint-disable no-undef */
import CartFactory from './../../../helpers/factory/CartFactory'
const cart = CartFactory()

describe('CART FACTORY', () => {
	it('should be return true if cart is empty', () => {
		expect(cart.isEmpty([])).toBe(true)
	})

	it('should be return false if cart is not empty', () => {
		expect(cart.isEmpty([{}])).toBe(false)
	})
})
