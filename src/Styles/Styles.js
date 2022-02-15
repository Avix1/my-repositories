import styled from 'styled-components';

export const Wrapper = styled.div`
   display: grid;
   justify-content: center;
   align-items: center;
   grid-template-columns: auto auto auto auto;
   grid-gap: 10px;
   width: 100%;
   margin-top: 100px;

`

export const Button = styled.a`
    background-color: #000000;
    color: var(--primary-color);
    display: relative;
    border: 2px var(--primary-color) solid;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 15px 25px;
    overflow: hidden;
    margin: 10px 10px;
    outline: none;
    transition: ease-out 0.3s;
    border-radius: 50px;
    text-decoration: none;
 
    :hover {
        filter: brightness(2.5);
        cursor: pointer;
    }

    :focus {
        outline: none;
    }

    ::after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 100%;
        height: 2px;
        background: var(--primary-color);

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms ease-in;
    }

    :hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`

export const Title = styled.h1`
    margin-top: 100px;
    font-weight: 600;
    font-size: 75px;
    padding: 10px;
    font-family: 'Inter', sans-serif;
`