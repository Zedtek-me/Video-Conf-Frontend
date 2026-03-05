import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import CToaster from "./utils/Toaster.tsx";


const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
    <>
        <App />
        <CToaster />
    </>
);