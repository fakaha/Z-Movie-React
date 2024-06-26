import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { ListRoutes } from "./routes/ListRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <ListRoutes />
    </QueryClientProvider>
  </React.StrictMode>
);
