import React, { useContext } from 'react'
import { Container, NavBar } from './styles'
import Logo from '../Logo'
import Button from '../Buttons/index'
import ThemeContext from '~/context/ThemeContext'

function AppBar() {
	const { isLight, light, dark } = useContext(ThemeContext)
	const theme = isLight ? light : dark
	// const { checkoutButton } = sizes
	const handleCheckout = () => alert('text handleCheckout')
	return (
		<Container background={theme.colors.bgColor}>
			<NavBar>
				<Logo></Logo>
				<Button
					onClick={handleCheckout}
					size={theme.sizes.checkoutButton}
					background={theme.colors.primary}
					disabled
				>
					Checkout
				</Button>
			</NavBar>
		</Container>
	)
}

export default AppBar
