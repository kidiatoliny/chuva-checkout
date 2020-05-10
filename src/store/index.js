import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './modules/store'
import productReducer from './modules/products'
import cartReducer from './modules/cart'

export default configureStore({
	reducer: {
		store: storeReducer,
		products: productReducer,
		cart: cartReducer,
	},
})
