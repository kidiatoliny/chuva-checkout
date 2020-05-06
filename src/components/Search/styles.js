import styled from 'styled-components'

export const Search = styled.div`
	height: 2.8rem;
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 32.8rem;
	margin: 2rem auto;
	border-bottom: 0.1rem solid #94a8b6;

	> div {
		width: 100%;
		margin-right: 1rem;

		> input {
			padding: 0 1.4rem;
			font-style: italic;
			font-weight: 500;
			font-size: 1.4rem;
			line-height: 2.1rem;
			color: #667681;
			background: none;
			border: none;
			box-shadow: none;

			:focus {
				color: #667681;
			}
		}
	}

	> img {
		margin-left: 0.1rem;
	}
`
