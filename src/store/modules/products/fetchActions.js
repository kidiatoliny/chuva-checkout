import { setProducts } from './'
import api from '~/services/api'

export const getStoreProducts = () => {
	return (dispatch) => {
		api
			.get('/store/2/')
			.then((res) => {
				dispatch(setProducts(res.data))
			})
			.catch(console.log)
	}
}
