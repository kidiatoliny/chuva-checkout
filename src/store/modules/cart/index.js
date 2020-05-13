import { createAction, createReducer } from '@reduxjs/toolkit'
import * as Types from './../../../store/modules/actionsTypes'

const INITIAL_STATE = []
//action
export const addProductToCart = createAction(Types.ADD_PRODUCT_TO_CART)
export const removeProductFromCart = createAction(
	Types.REMOVE_PRODUCT_FROM_CART,
)

export const addMoreQuantityToProductInCart = createAction(
	Types.ADD_QUANTITY_TO_PRODUCT_IN_CART,
)
export const removeQuantityOffProductInCart = createAction(
	Types.ADD_QUANTITY_TO_PRODUCT_IN_CART,
)

export default createReducer(INITIAL_STATE, {
	[addProductToCart.type]: (state, action) => [...state, action.payload],
	[removeProductFromCart.type]: (state, action) =>
		state.filter((product) => product.id !== action.payload),
	[addMoreQuantityToProductInCart.type]: (state, action) => [
		...state,
		action.payload,
	],
	[removeQuantityOffProductInCart.type]: (state, action) => [
		...state,
		action.payload,
	],
})
