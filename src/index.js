import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { DataContextProvder } from "./context/dataContext";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <DataContextProvder>
        <App />
      </DataContextProvder>
    </BrowserRouter>
  </StrictMode>
);
