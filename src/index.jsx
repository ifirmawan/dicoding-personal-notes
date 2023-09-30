import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Notes from "./components/Notes";

const root = createRoot(document.getElementById("root"));
root.render(<Notes />);
