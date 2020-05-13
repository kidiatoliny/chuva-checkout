import { createAction, createReducer } from '@reduxjs/toolkit'
import * as Types from './../../../store/modules/actionsTypes'
const INITIAL_STATE = []

//actions and actions types
export const setProducts = createAction(Types.SET_PRODUCTS)

//create reducer
export default createReducer(INITIAL_STATE, {
	[setProducts.type]: (state, action) => [...action.payload],
})
