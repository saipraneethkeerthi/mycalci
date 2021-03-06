import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import RouterPage from "./Router"
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <RouterPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

