import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./components/App";
import './../src/i18n/index'
import * as serviceWorker from './serviceWorker';

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();