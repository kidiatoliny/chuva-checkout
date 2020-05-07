import React, { useContext } from 'react'

import { Container, Contact, InfoContainer } from './styles'
import ThemeContext from '~/context/ThemeContext'
import Text from '../Text/index'
import { PropTypes } from 'prop-types'

function Header({ store }) {
	const { isLight, light, dark } = useContext(ThemeContext)
	const theme = isLight ? light : dark

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
	store: PropTypes.object.isRequired,
}

export default Header
