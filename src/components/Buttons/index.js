import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types'

function Button({ children, onClick, textColor, background, size }) {
	return (
		<Container
			onClick={onClick}
			textColor={textColor}
			background={background}
			height={size.height}
			width={size.width}
		>
			{children}
		</Container>
	)
}
Button.propTypes = {
	children: PropTypes.string,
	textColor: PropTypes.string,
	background: PropTypes.string,
	size: PropTypes.object,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	children: '',
	textColor: '#fff',
	background: '',
	size: {
		width: 8.4,
		height: 3.3,
	},
	onClick: () => {},
}

export default Button
