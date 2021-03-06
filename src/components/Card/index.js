import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	ToastsContainer,
	ToastsStore,
	ToastsContainerPosition,
} from 'react-toasts'
import {
	Container,
	CardContainer,
	CardInfo,
	Img,
	Header,
	Price,
	HeaderContainer,
	Description,
	CardActions,
} from './styles'

import PropTypes from 'prop-types'
import Text from '~/components/Typography/Text'
import Button from '../Buttons'
import deleteIcon from '~/assets/delete.svg'
import addIcon from '~/assets/add.svg'

import CartFactory from '~/helpers/factory/CartFactory'
const cart = CartFactory()

function Card({ product, theme }) {
	let units = {
		kg: 0.25,
		un: 1,
		l: 1,
	}

	const dispatch = useDispatch()

	const [inCart, setInCart] = useState(false)
	let [quantity, setQuantity] = useState(0)

	const handleAddToChekout = () => {
		if (!inCart) {
			quantity > units[product.unit]
				? // eslint-disable-next-line no-self-assign
				  (quantity = quantity)
				: (quantity = units[product.unit])
			cart.addProduct(dispatch, quantity, product, units)
			setInCart(true)
			setQuantity(quantity)
		}
	}

	const handleDeleteQuantity = async () => {
		if (quantity - units[product.unit] >= 0) {
			await setQuantity(quantity - units[product.unit])
			cart.removeQuantityFromProduct(dispatch, quantity, product, units)
		}
		if (quantity <= units[product.unit]) {
			await cart.removeProduct(dispatch, product)
			setInCart(false)
		}
	}

	const handleAddQuantity = async () => {
		await setQuantity(quantity + units[product.unit])
		if (inCart) {
			cart.addMoreQuantityToProduct(dispatch, quantity, product, units)
		}
	}

	return (
		<Container>
			{/* eslint-disable-next-line no-undef */}
			<Img src={require('./../../assets/' + product.image + '.svg')} />
			<CardContainer>
				<CardInfo>
					<HeaderContainer>
						<Header>
							<Text
								color={theme.colors.accent}
								type={theme.typography.productTitle}
							>
								{product.title}
							</Text>

							<Price>
								CVE {product.price} {product.unit ? '/ ' + product.unit : ''}
							</Price>
						</Header>
						<Button
							size={theme.sizes.addButton}
							onClick={handleAddToChekout}
							background={theme.colors.primary}
							disabled={inCart}
						>
							Adicionar
						</Button>
					</HeaderContainer>
					<Description>
						<Text color='#828282' type={theme.typography.productDescription}>
							{product.description}
						</Text>
					</Description>

					<CardActions>
						<div>
							<span>Quantidade</span>
							<button type='button' onClick={() => handleDeleteQuantity()}>
								<img src={deleteIcon} alt='remove' />
							</button>
							<h3>{quantity}</h3>
							<button type='button' onClick={() => handleAddQuantity()}>
								<img src={addIcon} alt='add' />
							</button>
						</div>
						<span>
							<span>Total</span>
							<strong>CVE {product.price * quantity}</strong>
						</span>
					</CardActions>
				</CardInfo>
			</CardContainer>
			<ToastsContainer
				store={ToastsStore}
				position={ToastsContainerPosition.BOTTOM_CENTER}
			/>
		</Container>
	)
}

Card.propTypes = {
	// storeId: PropTypes.number.isRequired,
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		unit: PropTypes.string,
		image: PropTypes.string.isRequired,
	}),
	theme: PropTypes.object.isRequired,
}

Card.propsDefault = {
	unit: 'un',
}
export default Card
