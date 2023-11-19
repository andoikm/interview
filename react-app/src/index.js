import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./ReducersAndContextExample/index.css";
import {applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
