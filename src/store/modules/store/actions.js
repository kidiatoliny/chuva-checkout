import * as Types from './types'
import api from '~/config/api'
export function loadStoreById(store) {
	return {
		type: Types.LOAD_STORE_BY_ID,
		store,
	}
}

export function getStoreById() {
	return async function (dispatch) {
		try {
			const response = await api.get(`/v1/stores`)
			dispatch(loadStoreById(response.data))
		} catch (error) {
			return error
		}
	}
}
