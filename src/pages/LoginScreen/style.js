import styled from 'styled-components'

export const Main = styled.div`
	padding: 0;
	margin: 0;
`

export const Container = styled.div`
	margin: 0;
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 2.5fr 1fr;
	grid-gap: 7rem;
`

export const Image = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	img {
		width: 100%;
		height: 100%;
	}
`

export const LoginContent = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
`

export const Title = styled.h2`
	margin: 15px 0;
	color: #333;
	font-size: 2.9rem;
`

export const I = styled.div`
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Button = styled.input`
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #32be8f, #61e8bb, #32be8f);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		background-position: right;
	}
`

export const InputDivOne = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 7% 93%;
	margin: 25px 0;
	padding: 5px 0;
	border-bottom: 2px solid #d9d9d9;
	margin-top: 0;

	div {
		position: relative;
		height: 45px;
	}

	&::before {
		content: '';
		position: absolute;
		bottom: -2px;
		width: 0%;
		height: 2px;
		background-color: #38d39f;
		transition: 0.4s;
		right: 50%;
	}

	&:hover::before {
		width: 50%;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -2px;
		width: 0%;
		height: 2px;
		background-color: #38d39f;
		transition: 0.4s;
		left: 50%;
	}

	&:hover::after {
		width: 50%;
	}
`

export const InputDivPass = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 7% 93%;
	margin: 25px 0;
	padding: 5px 0;
	border-bottom: 2px solid #d9d9d9;
	margin-bottom: 4px;

	div {
		position: relative;
		height: 45px;
	}

	&::before {
		content: '';
		position: absolute;
		bottom: -2px;
		width: 0%;
		height: 2px;
		background-color: #38d39f;
		transition: 0.4s;
		right: 50%;
	}

	&:hover::before {
		width: 50%;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -2px;
		width: 0%;
		height: 2px;
		background-color: #38d39f;
		transition: 0.4s;
		left: 50%;
	}

	&:hover::after {
		width: 50%;
	}
`

export const Input = styled.input`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
`

export const A = styled.a`
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: 0.3s;

	&:hover {
		color: #38d39f;
	}
`
