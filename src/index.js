import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from './Reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <React.strictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.strictMode>
  ,document.getElementById("root"));
