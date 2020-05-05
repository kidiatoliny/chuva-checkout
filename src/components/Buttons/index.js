import React from 'react'
import { Container } from './styles'
import PropTypes from 'prop-types'

function Button({ children, onClick, textColor, background, type }) {
	const { height, width } = type
	return (
		<Container
			onClick={onClick}
			textColor={textColor}
			background={background}
			height={height}
			width={width}
		>
			{children}
		</Container>
	)
}
Button.propTypes = {
	children: PropTypes.string,
	textColor: PropTypes.string,
	background: PropTypes.string,
	type: PropTypes.object,
	onClick: PropTypes.func,
}

Button.defaultProps = {
	children: '',
	textColor: '#fff',
	background: '#f89033',
	type: {
		width: 8.4,
		height: 3.3,
	},
	onClick: () => {},
}

export default Button
