import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { RootContextProvider } from "./RootContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </StrictMode>,
  rootElement
);
