import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap');

    * {
        border: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        margin: 0;
        outline: none !important;
        padding: 0;

        ::before,
        ::after {
            box-sizing: inherit;
        }

        ::-moz-selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }

        ::selection {
            background-color: ${Colors.primary};
            color: ${Colors.white};
        }
    }

    body,
    html {
        color: ${Colors.grey};
        background-color: ${Colors.light};
        font-size: 16px;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    textarea {
        resize: none;
    }
`;

export default GlobalStyle;
