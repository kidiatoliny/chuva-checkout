import { createActions, createReducer } from 'reduxsauce'
/*
 *actions type and creators
 */
export const { Types, Creators } = createActions({
	addProducts: [],
})

/**
 *Handlers
 */

const INITIAL_STATE = {
	data: [
		{
			id: 1,
			image: 'leite',
			title: 'Leite Meio Gordo',
			price: 90,
			unit: 'kg',
		},
		{
			id: 2,
			image: 'leite',
			title: 'Leite Meio ',
			price: 90,
			unit: 'kg',
		},
	],
}

// const load = (state = INITIAL_STATE, action) => {
// 	console.log(action)
// 	const a = {
// 		...state,
// 		data: [...state.data, action.data],
// 	}
// 	console.log(a)
// }

/**
 * Reducer
 */

export default createReducer(INITIAL_STATE, {
	// [Types.ADD_PRODUCTS]: load,
})
