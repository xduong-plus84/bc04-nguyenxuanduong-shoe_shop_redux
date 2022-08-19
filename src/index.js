import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer__Shoe_shop_redux } from "./Shoe_Shop/redux/reducers/rootReduce";

let store = createStore(
  rootReducer__Shoe_shop_redux,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* // <Provider> */}
    <App />
  </Provider>
);
