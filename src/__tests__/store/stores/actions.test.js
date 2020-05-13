/* eslint-disable no-undef */

import { setStore } from './../../../store/modules/store'
import api from './../../../services/api'

describe('Store Actions', () => {
	describe('Actions Creators', () => {
		test('should be return a ACTION CREATOR setStore{type:SET_STORE}', () => {
			expect(setStore()).toEqual({ type: 'SET_STORE' })
		})

		test('should be return a status code 200 if get Store from DB', async () => {
			const res = await api.get('/store/1')
			expect(res.status).toBe(200)
		})
	})
})
