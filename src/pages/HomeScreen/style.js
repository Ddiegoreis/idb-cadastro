import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    
    background-color: #fafafa;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: #32be8f;
    border-bottom: 3px solid #61e8bb;
    color: #fff;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    transition: all 1s ease-in;
`

export const PoweredBy = styled.p``

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
`

export const LogoBbm = styled.img``