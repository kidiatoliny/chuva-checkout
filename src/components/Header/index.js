import React from 'react'
import { Container, Contact, InfoContainer } from './styles'

import Text from '~/components/Typography/Text/'
import { PropTypes } from 'prop-types'

function Header({ theme, store }) {
	const { id, name, location, phone } = store
	return (
		<Container key={id}>
			<InfoContainer>
				<Text type={theme.typography.title} color={theme.colors.secondary}>
					{name}
				</Text>
				<Contact>
					<Text type={theme.typography.info} color={theme.primary}>
						{location}
					</Text>
					<Text color={theme.secondary}>Tel: {phone}</Text>
				</Contact>
			</InfoContainer>
		</Container>
	)
}

Header.propTypes = {
	store: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
	theme: PropTypes.object.isRequired,
}

export default Header
