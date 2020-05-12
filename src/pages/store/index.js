import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '~components/Header'
import { Container } from './styles'
import Title from '~/components/Typography/Title'
import Search from '../../components/Search'
import ThemeContext from '~/context/ThemeContext'
import ProductCard from '../../components/Card'
import AppBar from '~/components/AppBar'
import { getStoreByIdAndHisProducts } from '~/store/modules/store/fetchActions'

function Store() {
	let theme = useContext(ThemeContext)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getStoreByIdAndHisProducts())
	}, [dispatch])

	const store = useSelector((state) => state.store)
	const products = useSelector((state) => state.products)
	return (
		<Container>
			<AppBar theme={theme}></AppBar>
			<Header store={store} theme={theme}></Header>
			<Title value='produtos' theme={theme} />
			<Search placeholder='Procurar'></Search>
			{products.map((product) => {
				return (
					<ProductCard
						product={product}
						key={product.id}
						theme={theme}
						storeId={store.id}
					></ProductCard>
				)
			})}
		</Container>
	)
}

export default Store
