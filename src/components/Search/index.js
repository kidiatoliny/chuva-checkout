import React from 'react'
import PropTypes from 'prop-types'

import Input from '~/components/Inputs'

import { Search } from './styles'
import Icon from '~/assets/search.svg'

export default function SearchBar({ placeholder }) {
	return (
		<Search>
			<img src={Icon} alt='search' name='test' />
			<Input type='text' placeholder={placeholder} />
		</Search>
	)
}

SearchBar.propTypes = {
	placeholder: PropTypes.string.isRequired,
}
