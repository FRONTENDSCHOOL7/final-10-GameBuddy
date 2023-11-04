import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// :root안에는
// --사용하고 싶은 css 속성명: 실제 값

// 추가할 css속성 작성
const GlobalStyles = createGlobalStyle`
:root {
    --color-purple: #5865F2;
    --color-lightpurple: #8EA1E1;
    --Black-ops: "Black Ops One", sans-serif;
    --Roboto-M: "Roboto-Medium", sans-serif;
}

${reset}

@font-face {
    font-family: "Black Ops One";
    src: url("../assets/font/BlackOpsOne-Regular.ttf") format("font/ttf");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Roboto-Medium";
    src: url("../assets/font/Roboto-Medium.ttf") format("font/ttf");
    font-weight: 500;
    font-style: normal;
}


body {
    font-family: "Roboto-Medium";
    font-weight: 400;
}

button {
    font-family: "Roboto-Medium";
    font-size: 14px;
}

::placeholder {
    font-family: "Roboto-Medium";
}


.a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}
`;

export default GlobalStyles;
