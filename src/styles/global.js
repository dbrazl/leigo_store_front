import { createGlobalStyle } from "styled-components";

import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap');

    * {
        padding: 0;
        margin: 0;
        border: 0;
        outline: 0;
    }

    html, body {
        flex: 1;
    }

    p, h1, h2, h3, button, input, a, area {
        font-family: 'Nunito', 'Roboto', sans-serif;
        color: #000;
        background: transparent;
    }

    a, button {
        cursor: pointer;
    }

    a, a:link, a:visited {
        color: #000;
    }

    li {
        list-style: none;
    }
`;
