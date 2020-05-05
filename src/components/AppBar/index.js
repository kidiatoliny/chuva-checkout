import React from 'react'
import { Container, NavBar } from './styles'
import Logo from '../Logo'
import Button from '../Buttons/index'
import { LightTheme } from '~/config/theme/Light'

function AppBar() {
	const { sizes } = LightTheme
	const { checkoutButton } = sizes
	const handleCheckout = () => alert('text handleCheckout')
	return (
		<Container>
			<NavBar>
				<Logo></Logo>
				<Button onClick={handleCheckout} type={checkoutButton}>
					Checkout
				</Button>
			</NavBar>
		</Container>
	)
}

export default AppBar
