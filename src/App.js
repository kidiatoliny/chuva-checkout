import React, { useEffect, useContext } from 'react'
import GlobalStyles from '~/config/GlobalStyles'
import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'

import { Router } from 'react-router-dom'
import history from '~/services/history'

import ThemeContext from '~/context/ThemeContext'
import { Theme } from '~/config/theme/'

function App() {
	let { isLight, light, dark } = Theme

	let theme = isLight ? light : dark

	useEffect(() => {
		document.title = 'Chuva Checkout'
	})
	return (
		<Provider store={store}>
			<ThemeContext.Provider value={theme}>
				<Router history={history}>
					<Routes />
					<GlobalStyles />
				</Router>
			</ThemeContext.Provider>
		</Provider>
	)
}

export default App
