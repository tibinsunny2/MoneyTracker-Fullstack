// index.js or your main entry file
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from './Store/ExpenceStore'
import App from "./App"; // Replace with the root component of your application

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
<App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
