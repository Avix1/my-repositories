import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    background: linear-gradient(-45deg, #030408, #515C6F, #cecaca);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;

    @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

}
`

export default GlobalStyle;
