import React from "react"
import  ReactDOM  from "react-dom/client"

const heading = React.createElement(
    "h1",
    {
        id:"title",
        key : "h1"
    },
    "heading 1 from parcel"
)


const heading2 = React.createElement(
    "h2",
    {
        id:"title2",
        key:"h2"
    },
    "heading 2"
)

const container = React.createElement(
    "div",
    {
        id:"container"
    },
    [heading,heading2]
)

console.log(heading2 , heading , container);

const root = ReactDOM.createRoot(
    document.getElementById("root")
)

root.render(container);