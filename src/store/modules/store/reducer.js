import * as Types from './types'

export const initialState = {
	store: {
		id: 1,
		name: 'Chuva Mercado',
		location: 'Sao Vicente - Monte Sossego',
		phone: '977 92 01',

		products: [
			{
				id: 3,
				image: 'leite',
				title: 'Leite Meio Gordo',
				description: 'Leite Meio Gordo Mimosa',
				price: 90,
				unit: 'kg',
			},

			{
				id: 4,
				image: 'ovos',
				title: 'ovos',
				description: 'Pack 16 Sociave',
				price: 220,
				unit: 'un',
			},
			{
				id: 6,
				image: 'papel',
				title: 'Papel Higiénico',
				description: 'Folha simples. Neutro. Com 8 rolos Personal',
				price: 180,
				unit: 'un',
			},
		],
	},
}

export default function store(state = initialState, action) {
	switch (action) {
		case Types.LOAD_STORE_BY_ID: {
			let { store } = action
			console.log(store)
			return {
				...state,
				store: { ...state.store, store },
			}
		}
		default:
			return state
	}
}
