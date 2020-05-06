import React, { useEffect } from 'react'
import GlobalStyles from '~/config/GlobalStyles'
import AppBar from '~/components/AppBar/index'
import Store from './pages/store'
import { Provider } from 'react-redux'
import store from './store'

function App() {
	useEffect(() => {
		document.title = 'Chuva Checkout'
	})
	return (
		<Provider store={store}>
			<GlobalStyles />
			<AppBar></AppBar>
			<Store></Store>
		</Provider>
	)
}

export default App
