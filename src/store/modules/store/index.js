import { createAction, createReducer } from '@reduxjs/toolkit'
import * as Types from '~/store/modules/actionsTypes'
const INITIAL_STATE = []

//actions and actions types
export const setStore = createAction(Types.SET_STORE)

//create reducer
export default createReducer(INITIAL_STATE, {
	[setStore.type]: (state, action) => action.payload,
})
