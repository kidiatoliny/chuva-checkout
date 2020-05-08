import React from 'react'

import { Container } from './styles'
import Text from '~/components/Typography/Text'
import { PropTypes } from 'prop-types'

function Title({ theme, value, color, ...rest }) {
	return (
		<Container>
			<Text color={color} type={theme.typography.title} {...rest}>
				{value}
			</Text>
		</Container>
	)
}

Title.propTypes = {
	theme: PropTypes.object.isRequired,
	value: PropTypes.string.isRequired,
	color: PropTypes.string,
}

Title.defaultProps = {
	color: '#f89033',
}

export default Title
