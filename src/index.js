import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./pages/store";
import { Provider } from "react-redux";
import { fetchPosts } from "./pages/store/postSlice/PostSlice";
import { fetchUsers } from "./pages/store/postSlice/PostUserSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
