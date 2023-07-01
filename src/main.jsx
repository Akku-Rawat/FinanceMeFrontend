import React from 'react'
import * as ReactDOM from "react-dom/client";
import { useGlobalContext , GlobalProvider} from "./context/globalContext";

import App from './App'
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
    <App />

    </GlobalProvider>
  </React.StrictMode>,
)
