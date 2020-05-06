import styled from 'styled-components'

export const Container = styled.div`
	height: 7rem;
	background-color: ${(props) => props.background};
	padding-right: 2rem;
	display: flex;
	justify-content: center;
`

export const NavBar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 414px;
`
