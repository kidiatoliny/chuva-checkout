import React, { useEffect } from 'react'
import GlobalStyles from '~/config/GlobalStyles'
import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'

import { Router } from 'react-router-dom'
import history from '~/services/history'

function App() {
	useEffect(() => {
		document.title = 'Chuva Checkout'
	})
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<GlobalStyles />
			</Router>
		</Provider>
	)
}

export default App
