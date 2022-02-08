import styled from 'styled-components';

const Button = styled.a`
        background-color: #030408;
        color: #fff;
        border: 1px purple solid;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        overflow: hidden;
        margin: 10px 0;
        outline: none;
        transition: ease-in-out 0.3s;
        text-decoration: none;

    :hover{
        filter: brightness(2);
        cursor: pointer;
    }

    :focus {
        outline: none;
    }
`

export default Button;