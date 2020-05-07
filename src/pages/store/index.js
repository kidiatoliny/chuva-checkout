import React, { useContext, useEffect, useState } from 'react'

import Header from '~components/Header'
import { Container, Title } from './styles'
import Text from '~/components/Text/'
import Search from '../../components/Search'
import ThemeContext from '~/context/ThemeContext'
import Card from '../../components/Card'
import axios from 'axios'
const url = 'http://localhost:3333/store/1'

// const getStoreById = (id) =>
// 	stores.filter((store) => {
// 		if (store.id === id) return store
// 		return null
// 	})

function Store() {
	const { isLight, light, dark } = useContext(ThemeContext)
	const theme = isLight ? light : dark
	//const loadStore = getStoreById(id)
	const [store, setStore] = useState([])
	const [storeProducts, setStoreProducts] = useState([])

	useEffect(() => {
		axios.get(url).then((res) => {
			const store = res.data
			setStore(store)
			setStoreProducts(store.products)
		})
	}, [url])
	console.log(store.products)
	// useEffect(() => {
	// 	setStoreProducts(store[0].products)
	// }, [store])

	return (
		<Container>
			<Header store={store}></Header>
			<Title>
				<Text color={theme.colors.primary} type={theme.typography.title}>
					Produtos
				</Text>
			</Title>
			<Search placeholder='Procurar'></Search>
			{storeProducts.map((product) => {
				return <Card product={product} key={product.id}></Card>
			})}
		</Container>
	)
}

export default Store
