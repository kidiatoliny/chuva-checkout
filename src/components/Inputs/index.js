import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input } from './styles'

export default function InputField({
	label,
	name,
	error,
	errorMessage,
	isRequired,
}) {
	return (
		<Container>
			<label htmlFor={name}>
				{label}
				{isRequired ? ' *' : ''}
			</label>
			<Input name={name} error={error} isRequired={isRequired} />
			<span>{error ? errorMessage : ''}</span>
		</Container>
	)
}

InputField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.bool,
	isRequired: PropTypes.bool,
	errorMessage: PropTypes.string,
}

InputField.defaultProps = {
	label: '',
	name: '',
	error: false,
	isRequired: false,
	errorMessage: '',
}
