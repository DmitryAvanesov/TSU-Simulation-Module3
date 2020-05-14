import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { MainContainer } from "./components/main-container";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={MainContainer} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#container')
);