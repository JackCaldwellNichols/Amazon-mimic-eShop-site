//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import reducer, {initialState} from "./Reducer.js";
import { StateProvider } from "./StateProvider.js"

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import App from "./app.js";

//render your react application
ReactDOM.render(

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,


    document.querySelector("#app"));
