import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './modules'

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store
