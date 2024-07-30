import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/sass/main.scss";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <Provider store={store}>
                <App />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
