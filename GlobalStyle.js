import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
      }

    button {
        outline: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle