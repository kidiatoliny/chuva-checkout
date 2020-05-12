import React, { useEffect, useContext } from 'react'
import GlobalStyles from '~/config/GlobalStyles'
import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'

import { Router } from 'react-router-dom'
import history from '~/services/history'
import ThemeContext from './context/ThemeContext'
function App() {
	let { isLight, light, dark } = useContext(ThemeContext)
	let theme = isLight ? light : dark
	useEffect(() => {
		document.title = 'Chuva Checkout'
	})
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<GlobalStyles bg={theme.colors.bodyBg} />
			</Router>
		</Provider>
	)
}

export default App
