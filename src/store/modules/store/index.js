import { createAction, createReducer } from '@reduxjs/toolkit'
const INITIAL_STATE = []
// const INITIAL_STATE = {
// 	id: 1,
// 	name: 'Chuva Mercado',
// 	location: 'Sao Vicente - Monte Sossego',
// 	phone: '977 92 01',
// 	products: [
// 		{
// 			id: 3,
// 			image: 'leite',
// 			title: 'Leite Meio Gordo',
// 			description: 'Leite Meio Gordo Mimosa',
// 			price: 90,
// 			unit: 'kg',
// 		},
// 		{
// 			id: 4,
// 			image: 'ovos',
// 			title: 'ovos',
// 			description: 'Pack 16 Sociave',
// 			price: 220,
// 			unit: 'un',
// 		},
// 		{
// 			id: 6,
// 			image: 'papel',
// 			title: 'Papel Higiénico',
// 			description: 'Folha simples. Neutro. Com 8 rolos Personal',
// 			price: 180,
// 			unit: 'un',
// 		},
// 	],
// }
//actions and actions types
export const setStore = createAction('SET_STORE')

//create reducer
export default createReducer(INITIAL_STATE, {
	[setStore.type]: (state, action) => action.payload,
})
