import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 32.8rem;
	margin: 2rem auto;
	border-radius: 0.3rem;
	background-color: #fff;
	cursor: pointer;
`

export const Img = styled.img`
	display: block;
	height: 20rem;
	margin-top: 1rem;
	border-radius: 0.4rem 0.4rem 0 0;
	object-fit: contain;
`

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 2.8rem;
`

export const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
	height: 12rem;
	width: 100%;
`

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const Price = styled.div`
	color: #f76b1c;
	font-style: normal;
	font-weight: 600;
	font-size: 1.2rem;
	line-height: 1.8rem;
	margin-top: 0.5rem;
`
export const Header = styled.div``
export const Description = styled.div`
	display: flex;
	flex: none;
	margin: 0.8rem auto;
	width: 100%;
`
export const CardActions = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	span {
		display: flex;
		align-self: center;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		color: #c4c4c4;

		> strong {
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 18px;
			align-items: center;
			text-align: center;
			color: #667681;
			padding-left: 1rem;
		}
	}

	> div {
		display: flex;
		align-items: center;

		> span {
			margin-right: 1rem;
		}

		> button {
			align-self: center;
			align-items: center;
			border: none;
			border-radius: 50%;
			background: transparent;
		}

		> h3 {
			display: flex;
			justify-content: center;
			background: transparent;
			font-style: normal;
			font-weight: 500;
			font-size: 1.2rem;
			line-height: 1.8rem;
			color: #667681;
			border: none;
			padding: 0.6rem;
			min-width: 4.5rem;
		}
	}
`
