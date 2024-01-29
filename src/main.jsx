import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AppProvider } from "./contexts/useApp.jsx";

import App from "./App.jsx";

import "@fontsource-variable/montserrat";

import "../main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </HelmetProvider>
  </BrowserRouter>
);
