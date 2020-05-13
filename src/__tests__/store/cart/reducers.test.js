/* eslint-disable no-undef */
import reducer from './../../../store/modules/cart'

describe('CART Reducers', () => {
	it('Should Return INITIAL STATE if reducer is undefined', () => {
		expect(reducer(undefined, [])).toEqual([])
	})
})
