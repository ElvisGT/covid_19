import ReactDOM from "react-dom/client";
import React from 'react';
import App from "./App";
import "./styles/index.scss";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {initialState} from './app/initialState';
import {reducer} from './app/reducer';

const globalStore = createStore(reducer,initialState);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
