import { createAction, createReducer } from '@reduxjs/toolkit'
import * as Types from '~/store/modules/actionsTypes'

const INITIAL_STATE = []
//action
export const addProductToCheckout = createAction(Types.ADD_PRODUCT_TO_CHECKOUT)
export const addMoreQuantityToProductInCart = createAction(
	Types.ADD_QUANTITY_TO_PRODUCT_IN_CART,
)

export default createReducer(INITIAL_STATE, {
	[addProductToCheckout.type]: (state, action) => [...state, action.payload],
	[addMoreQuantityToProductInCart.type]: (state, action) => [
		...state,
		action.paylod,
	],
})
