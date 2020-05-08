import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Label, ErrorMessage } from './styles'
function InputField({ label, name, error, errorMessage, required, ...rest }) {
	return (
		<Container>
			<Label htmlFor={name}>
				{label}
				{required ? ' *' : ''}
			</Label>
			<Input name={name} error={error} required={required} {...rest} />
			<ErrorMessage>{error ? errorMessage : ''}</ErrorMessage>
		</Container>
	)
}

InputField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.bool,
	required: PropTypes.bool,
	errorMessage: PropTypes.string,
}

InputField.defaultProps = {
	label: '',
	name: '',
	error: false,
	required: false,
	errorMessage: '',
}
export default InputField
