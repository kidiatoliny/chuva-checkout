import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 100%;
	margin: 0 auto;

	> label {
		display: flex;
		flex-direction: column-reverse;
		position: relative;
		width: 100%;
		margin: 0 auto;
		margin-bottom: 0.7rem;
		font-style: normal;
		font-weight: 500;
		font-size: 1.4rem;
		line-height: 2.1rem;
		color: #34495e;
	}

	> span {
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
	}
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
	color: #c4c4c4;
	padding: 1.5rem 1.2rem;
	margin-bottom: 2.8rem;
	margin: 0 auto;
	width: 100%;

	:focus {
		color: #c4c4c4;
		box-shadow: none;
		border-color: rgba(255, 255, 255, 0.1);
	}
`
