import api from '~/services/api'
import { setStore } from './../store'
import { setProducts } from '../products'

export const getStore = () => {
	return async (dispatch) => {
		const res = await api.get('/store/1')
		try {
			dispatch(setStore(res.data))
			dispatch(setProducts(res.data.products))
		} catch (error) {
			console.log(error)
		}
	}
}
