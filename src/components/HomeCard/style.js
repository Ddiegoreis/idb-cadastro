import styled from 'styled-components'

export const Card = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
	padding: 1rem;
	width: 20rem;
    margin: 1rem;
	text-align: center;
	color: whitesmoke;
	background-color: whitesmoke;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
		0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
		0 16px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 110%;
		background-size: cover;
		background-position: 0 0;
		transition: transform calc(var(--d) * 1.5) var(--e);
		pointer-events: none;
	}

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 200%;
		pointer-events: none;
		background: #32be8f;
		transform: translateY(-50%);
		transition: transform calc(var(--d) * 2) var(--e);
	}

    &:hover {
        align-items: center;

        &:before { transform: translateY(-4%); }
        &:after { transform: translateY(-50%); }

        .content {
        transform: translateY(0);

        > *:not(.title) {
            opacity: 1;
            transform: translateY(0);
            transition-delay: calc(var(--d) / 8);
        }
        }
    }
`

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    transition: transform var(--d) var(--e);
    z-index: 1;

    > * + * {
        margin-top: 1rem;
    }
`

export const Title = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
`
export const Copy = styled.p`
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
`

export const Btn = styled.button`
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;
    transition: all .7s ease-in-out;

    &:hover {
        background-color: #4a4a4a;
    }

    &:focus {
        outline: 1px solid #61e8bb;
        outline-offset: 3px;
    }
`
