import React, { useContext, useState } from 'react'

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
import ThemeContext from '~/context/ThemeContext'
import PropTypes from 'prop-types'
import Text from '~/components/Text'
import Button from '../Buttons'
import deleteIcon from '~/assets/delete.svg'
import addIcon from '~/assets/add.svg'
function Card({ product }) {
	const { isLight, light, dark } = useContext(ThemeContext)
	const theme = isLight ? light : dark

	const handleAddToChekout = () => {
		alert('add to checkout')
	}
	const handleDeleteQuantity = (price) => {
		if (quantity > 0) {
			setQuantity(quantity - 0.25)
			setTotal(quantity * price)
			return
		}
		setQuantity(0)
		setTotal(0)
	}

	const handleAddQuantity = (price) => {
		if (quantity >= 0) {
			setQuantity(quantity + 0.25)
			setTotal(quantity * price)
		}
	}
	const [quantity, setQuantity] = useState(0)
	const [total, setTotal] = useState(0)
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
							<button
								type='button'
								onClick={() => handleDeleteQuantity(product.price)}
							>
								<img src={deleteIcon} alt='remove' />
							</button>
							<h3>{quantity}</h3>
							<button
								type='button'
								onClick={() => handleAddQuantity(product.price)}
							>
								<img src={addIcon} alt='add' />
							</button>
						</div>
						<span>
							<span>Total</span>
							<strong>{total}</strong>
						</span>
					</CardActions>
				</CardInfo>
			</CardContainer>
		</Container>
	)
}

Card.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		unit: PropTypes.string,
		image: PropTypes.string.isRequired,
	}),
}

export default Card
