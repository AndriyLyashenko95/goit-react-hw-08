import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import App from './App';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
