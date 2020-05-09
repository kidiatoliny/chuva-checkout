/* eslint-disable no-undef */

import { loadStore } from './../../store/modules/store'

describe('Store Actions', () => {
	describe('Actions Creators', () => {
		test('should be return a ACTION CREATOR loadStore{type:LOAD_STORE}', () => {
			expect(loadStore()).toEqual({ type: 'LOAD_STORE' })
		})
	})
})
