import React from 'react'

import { Container } from './styles'
import PropTypes from 'prop-types'

function Text({ children, type, color }) {
	const { fontWeight, fontSize, lineHeight } = type
	return (
		<Container
			fontWeight={fontWeight}
			fontSize={fontSize}
			lineHeight={lineHeight}
			color={color}
		>
			{children}
		</Container>
	)
}

Text.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	type: PropTypes.object,
	color: PropTypes.string,
}
Text.defaultProps = {
	children: '',
	type: {
		fontWeight: 'normal',
		fontSize: 1.4,
		lineHeight: 2.1,
	},
	color: '#34495e',
}

export default Text
