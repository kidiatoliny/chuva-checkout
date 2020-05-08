import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100%;
	margin: auto;
	margin-top: 2rem;
	max-width: 32.8rem;
`

export const Input = styled.input`
	background: #f8f8f8;
	box-shadow: 0rem 1.5rem 2.5rem rgba(0, 0, 0, 0.1);
	border-radius: 0.3rem;
	font-style: italic;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.1rem;
	border-color: ${(props) => (props.error ? ' #ea5858' : ' transparent')};
	height: 5rem;
	color: #4f4f4f;
	padding: 1.2rem 1.4rem;

	width: 100%;
`

export const Label = styled.label`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	width: 100%;
	margin-bottom: 1rem;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.1rem;
	color: #34495e;
`

export const ErrorMessage = styled.span`
	display: flex;
	flex-direction: column-reverse;
	position: relative;
	width: 100%;
	margin: 0 auto;
	margin-bottom: 1rem;
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.1rem;
	color: #ea5858;
`
