import { setStore } from './../store'
import api from '~/services/api'

export const getStore = () => {
	return (dispatch) => {
		api
			.get('/store/2/')
			.then((res) => {
				dispatch(setStore(res.data))
			})
			.catch(console.log)
	}
}
