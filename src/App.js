import React, { useEffect } from 'react'
import GlobalStyles from '~/config/GlobalStyles'
import AppBar from '~/components/AppBar/index'
import Header from './components/Header'

function App() {
	useEffect(() => {
		document.title = 'Chuva Checkout'
	})
	return (
		<>
			<GlobalStyles />
			<AppBar></AppBar>
			<Header></Header>
		</>
	)
}

export default App
