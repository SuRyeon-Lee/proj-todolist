import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --color-bg: #F2F0FF;
        --color-point-bg: #6E86F0;
        --color-red: #ff6b6b;
        --color-active-red: #fa5252;
        --color-hover-red: #ff8787;
        --color-green: #38d9a9;
        --color-active-green: #20c997;
        --color-hover-green: #63e6be;
        --color-yellow: #ffd261;
        --color-blur-gray: #dee2e6;
    }

    body{
        background-color: var(--color-bg);
    }
`;

export default GlobalStyle