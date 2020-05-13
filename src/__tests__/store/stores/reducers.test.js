import reducer from './../../../store/modules/store'
describe('Store Reducers', () => {
	it('Should Return INITIAL STATE if reducer is undefined', () => {
		expect(reducer(undefined, {})).toEqual([])
	})
})
