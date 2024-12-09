import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import "./index.css"


const root = document.getElementById("root");

const app = ReactDOM.createRoot(root)

app.render(<AppLayout/>);