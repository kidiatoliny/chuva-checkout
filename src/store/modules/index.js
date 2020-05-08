import { combineReducers } from 'redux'

import cart from './cart/reducers'
import store from './store/reducer'

export default combineReducers({
	cart,
	store,
})
