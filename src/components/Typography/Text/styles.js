import styled from 'styled-components'

export const Container = styled.p`
	font-style: normal;
	font-weight: ${(props) => props.fontWeight};
	font-size: ${(props) => props.fontSize}rem;
	line-height: ${(props) => props.lineHeight}rem;
	color: ${(props) => props.color};
`
