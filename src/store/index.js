import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './modules/store'
import productReducer from './modules/products'
import cart from './modules/cart/reducers'

export default configureStore({
	reducer: {
		store: storeReducer,
		products: productReducer,
		cart,
	},
})
