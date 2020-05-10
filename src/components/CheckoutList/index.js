import React from 'react'

import { PropTypes } from 'prop-types'

import { CartList, TotalContainer, Total, Value, List } from './styles'
import Title from '~/components/Typography/Title'

export default function Cart({ cart, theme }) {
	console.log(cart)
	return (
		<CartList>
			<strong></strong>
			<Title value='Produtos' theme={theme} color={theme.colors.secondary} />
			{cart.map((product) => (
				<List key={product.id} textColor={theme.colors.accent}>
					<div>
						<label>{product.title}</label>
						<span>
							{product.price} / {product.unit} <span>x {product.quantity}</span>
						</span>
					</div>
					<Value textColor={theme.colors.primary}>
						CVE {product.price * product.quantity}.00
					</Value>
				</List>
			))}
			<TotalContainer>
				<Total textColor={theme.colors.primary}>total</Total>
				<Value textColor={theme.colors.primary}>CVE 354353</Value>
			</TotalContainer>
		</CartList>
	)
}

Cart.propTypes = {
	cart: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
	theme: PropTypes.object.isRequired,
}
