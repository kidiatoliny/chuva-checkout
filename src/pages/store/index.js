import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '~components/Header'
import { Container } from './styles'
import Title from '~/components/Typography/Title'
import Search from '../../components/Search'
import ThemeContext from '~/context/ThemeContext'
import Card from '../../components/Card'
import AppBar from '~/components/AppBar'
import { getStore } from '~/store/modules/store/fetchActions'
import { getStoreProducts } from '~/store/modules/products/fetchActions'

function Store() {
	let { isLight, light, dark } = useContext(ThemeContext)
	let theme = isLight ? light : dark
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getStore())
		dispatch(getStoreProducts())
	}, [dispatch])

	const store = useSelector((state) => state.store)
	const products = useSelector((state) => state.products)
	return (
		<Container>
			<AppBar theme={theme}></AppBar>
			<Header store={store}></Header>
			<Title value='produtos' theme={theme} />
			<Search placeholder='Procurar'></Search>
			{products.map((product) => {
				return (
					<Card
						product={product}
						key={product.id}
						theme={theme}
						storeId={store.id}
					></Card>
				)
			})}
		</Container>
	)
}

export default Store
