import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement("h2", {
    key: "12",
    id: "heading2"
}, "Heading 2");
const heading3 = React.createElement("h3", {
    key: "13",
    id: "heading3"
}, "Heading 3");
const heading4 = React.createElement("h4", {
    key: "14",
    id: "heading4"
}, "Heading 4");

const heading = React.createElement("div", {
    id: "headingContainer"
}, [heading2, heading3, heading4]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);