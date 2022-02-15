import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #8920D4;
    --secondary-color: #190626;
    --border: #CD24D6;
}

body {
   font-family: 'Inter', sans-serif;
   background: linear-gradient(-90deg, var(--primary-color), var(--secondary-color));
   animation: gradient 15s ease infinite;
   background-size: 400% 400%;
   text-align: center;
   height: 100vh;

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