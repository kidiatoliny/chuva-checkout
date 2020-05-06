import styled from 'styled-components'

export const Container = styled.button`
	font-style: normal;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.1rem;
	display: flex;
	align-items: center;
	text-align: center;
	box-shadow: 0px 5px 15px rgba(3, 3, 3, 0.15);
	border-radius: 3px;
	background-color: ${(props) => props.background};
	color: ${(props) => props.textColor};
	width: ${(props) => props.width}rem;
	height: ${(props) => props.height}rem;
	justify-content: center;
	border: 0;
	cursor: pointer;
`
