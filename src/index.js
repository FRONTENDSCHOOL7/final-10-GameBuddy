import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyled";
import { RecoilRoot } from "recoil";
import Profile from "./Components/Profile/Profile";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyles />
            <Profile />
            {/* <App /> */}
        </RecoilRoot>
    </React.StrictMode>
);
