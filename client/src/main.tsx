import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { AuthProvider } from "./providers/authProvider.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <AuthProvider>{router}</AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
