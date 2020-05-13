import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Container } from "./components/container";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={Container} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#container')
);