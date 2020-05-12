import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { addMoreQuantityToProductInCart } from '~/store/modules/cart'
import { removeQuantityOffProductInCart } from '~/helpers'

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

	const productIncart = useSelector((state) => state.cart)

	const handleAddToChekout = () => {
		if (!inCart) {
			quantity > units[product.unit]
				? (quantity = quantity)
				: (quantity = units[product.unit])
			cart.addToCart(dispatch, quantity, product, units)
			setInCart(true)
			setQuantity(quantity)
		}
	}

	const handleDeleteQuantity = () => {
		if (quantity - units[product.unit] >= 0) {
			setQuantity(quantity - units[product.unit])
			removeQuantityOffProductInCart(productIncart, product.id, quantity)
		}
		if (quantity <= units[product.unit]) setInCart(false)
	}

	const handleAddQuantity = () => {
		setQuantity(quantity + units[product.unit])
		if (inCart) {
			dispatch(
				addMoreQuantityToProductInCart({
					...product,
					quantity: quantity + units[product.unit],
				}),
			)
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
