import styled, { keyframes } from 'styled-components'

export const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem;
`

export const PropertyCard = styled.div`
	height: 18em;
	width: 14em;
	display: flex;
	flex-direction: column;
	position: relative;
	transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;

	&:hover .property-description {
		height: 0em;
		padding: 0px 1em;
	}

	&:hover .property-image {
		height: 18em;
	}

    &:hover .property-image-title {
        opacity:1;
    }
`

const FadeAnimation = keyframes`
    0%{background-position:0% 94%}
    50%{background-position:100% 7%}
    100%{background-position:0% 94%}
`

export const PropertyImage = styled.div`
	height: 10em;
	width: 14em;
	padding: 1em 2em;
	position: absolute;
	top: 0px;
	transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: linear-gradient(53deg, #24ea68, #4be6c5, #6cf7a9);
    background-size: 600% 600%;

    animation: ${FadeAnimation} 40s ease infinite;
`

export const PropertyImageTitle = styled.div`
	position: relative;
	transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
	font-size: 1.3em;
    opacity: 0;

	h5 {
		color: #fff;
		text-transform: uppercase;
		position: absolute;
	}
`

export const PropertyDescription = styled.div`
	background-color: #fafafc;
	height: 8em;
	width: 14em;
	position: absolute;
	bottom: 0em;
	transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
	padding-top: 1rem;
	text-align: center;
	color: #000;
`

export const CardTile = styled.h3`
	text-transform: uppercase;
	font-size: 1.2em;
	padding-bottom: 2px;
`
