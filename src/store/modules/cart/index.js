import { createAction, createReducer } from '@reduxjs/toolkit'
import * as Types from '~/store/modules/actionsTypes'

//action
export const addProductToCheckout = createAction(Types.ADD_PRODUCT_TO_CHECKOUT)
const INITIAL_STATE = []

export default createReducer(INITIAL_STATE, {
	[addProductToCheckout.type]: (state, action) => [...state, action.payload],
})
