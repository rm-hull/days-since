import { ChakraProvider, ColorModeScript, createLocalStorageManager, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ErrorFallback from "./components/ErrorFallback";

const manager = createLocalStorageManager("days-since.color-mode");
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" storageKey="days-since.color-mode" />
    <ChakraProvider theme={theme} colorModeManager={manager}>
      <Router basename="/days-since">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
