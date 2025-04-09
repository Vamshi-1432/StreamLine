import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reduxStore from "./utils/ReduxStore";
import { BrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <div className=" bg-gradient-to-tr from-black h-full">
        <App />
        <Footer />
        <Outlet />
      </div>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
