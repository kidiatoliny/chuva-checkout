/* eslint-disable no-undef */
import api from './../../../services/api'
import { setProducts } from './../../../store/modules/products'

describe('Cart Actions', () => {
	describe('Actions Creators', () => {
		test('should be return a ACTION CREATOR setProducts {type:SET_PRODUCTS}', () => {
			expect(setProducts()).toEqual({ type: 'SET_PRODUCTS' })
		})

		test('should be return a status code 200 if get Products from DB', async () => {
			const res = await api.get('/store/1')
			expect(res.status).toBe(200)
		})
	})
})
