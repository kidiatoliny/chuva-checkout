import React from 'react'

import { Container, InfoContainer } from './styles'
import Text from '../Text/index'
import { LightTheme } from '~/config/theme/Light'

function Header() {
	const { colors, typografy } = LightTheme
	const { title, info } = typografy
	return (
		<Container>
			<Text type={title} color={colors.secondary}>
				Chuva Mercado
			</Text>
			<InfoContainer>
				<Text type={info} color={colors.primary}>
					Sao Vicente - Monte Sossego
				</Text>
				<Text color={colors.secondary}>Tel: 977 92 01</Text>
			</InfoContainer>
		</Container>
	)
}

export default Header
