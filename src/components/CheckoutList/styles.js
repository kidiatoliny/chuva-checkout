import styled from 'styled-components'

export const CartList = styled.ul`
	display: flex;
	flex-direction: column;
	align-content: center;
	height: auto;
	width: 100%;
	max-width: 31.2rem;
	margin: 0 auto;

	p {
		margin-bottom: 2.4rem;
	}
`

export const List = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	border-bottom: 0.1rem solid #34495e;
	margin-bottom: 1rem;

	> div {
		display: flex;
		align-content: center;
		> label {
			display: flex;
			align-items: center;
			font-style: normal;
			font-weight: normal;
			font-size: 1.8rem;
			line-height: 2.7rem;
			margin-right: 1rem;
			color: #34495e;
			text-transform: capitalize;
		}

		span {
			display: flex;
			flex-direction: column;
			align-content: center;
			font-style: normal;
			font-weight: normal;
			font-size: 1rem;
			line-height: 1.5rem;
			color: #828282;
		}
	}

	> strong {
		font-style: normal;
		font-weight: 500;
		font-size: 1.3rem;
		line-height: 1.9rem;
		display: flex;
		align-items: center;
		text-align: center;
		color: #667681;
	}
`

export const TotalContainer = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
`
export const Total = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 1.8rem;
	line-height: 2.7rem;
	color: ${(props) => props.textColor};
	text-transform: capitalize;
`

export const Value = styled.strong`
	font-style: normal;
	font-weight: 600;
	font-size: 1.3rem;
	line-height: 1.9rem;
	color: ${(props) => props.textColor};
`
