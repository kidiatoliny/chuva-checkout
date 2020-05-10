import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { Container, NavBar } from './styles'
import Logo from '../Logo'
import Button from '../Buttons/index'
import { Redirect, useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function AppBar({ theme }) {
	// const { checkoutButton } = sizes
	let [toCheckout, setToCheckout] = useState(false)
	let location = useLocation()
	function handlegoToCheckout() {
		return setToCheckout(true)
	}

	const productsInCart = useSelector((state) => state.cart)
	return (
		<>
			{toCheckout ? <Redirect to='/checkout' /> : null}
			<Container background={theme.colors.bgColor}>
				<NavBar>
					<Link to='/'>
						<Logo></Logo>
					</Link>
					{location.pathname === '/' ? (
						<Button
							onClick={handlegoToCheckout}
							size={theme.sizes.checkoutButton}
							background={theme.colors.primary}
							disabled={productsInCart.length === 0}
						>
							Checkout
						</Button>
					) : null}
				</NavBar>
			</Container>
		</>
	)
}

AppBar.propTypes = {
	theme: PropTypes.object.isRequired,
}
export default AppBar
