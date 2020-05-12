import React, { useContext } from 'react'
import { Container } from './styles'
import { useSelector } from 'react-redux'

import InputField from '~/components/Input'
import Title from '~/components/Typography/Title'
import ThemeContext from '~/context/ThemeContext'
import Button from '~/components/Buttons'
import Cart from '../../components/CheckoutList'
import Header from '~/components/Header'
import AppBar from '~/components/AppBar'

function Checkout() {
	let theme = useContext(ThemeContext)
	let cart = useSelector((state) => state.cart)
	let store = useSelector((state) => state.store)

	return (
		<Container>
			<AppBar theme={theme}></AppBar>
			<Header theme={theme} store={store}></Header>
			<Title value='Checkout' theme={theme} />
			<Cart cart={cart} theme={theme}></Cart>
			<Title
				value='Detalhes do Cliente'
				theme={theme}
				color={theme.colors.secondary}
			/>
			<InputField
				name='name'
				label='Nome'
				required
				type='text'
				placeholder='First name'
			></InputField>
			<InputField
				name='surname'
				label='Apelido'
				required
				type='text'
				placeholder='Apelido'
			></InputField>
			<InputField
				name='email'
				label='Email'
				required
				type='email'
				placeholder='seuemail@email.com'
			></InputField>
			<InputField
				name='phone'
				label='Telefone'
				required
				type='text'
				placeholder='Ex. 999 99 99'
			></InputField>
			<InputField
				name='morada'
				label='Morada'
				required
				type='text'
				placeholder='Ex. Monte Sossego'
			></InputField>
			<Button background={theme.colors.primary} size={theme.sizes.cartButton}>
				Submeter
			</Button>
		</Container>
	)
}

export default Checkout
