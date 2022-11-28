import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto";
import "./index.css";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { LoanTypeProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
