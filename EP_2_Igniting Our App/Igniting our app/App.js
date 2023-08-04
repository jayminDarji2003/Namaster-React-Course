import { div } from "prelude-ls";
import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h1"
//     },
//     "heading 1 from parcel"
// )


// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "title2",
//         key: "h2"
//     },
//     "heading 2"
// )

// const container = React.createElement(
//     "div",
//     {
//         id: "container"
//     },
//     [heading, heading2]
// )


// console.log(heading2, heading, container);


// JSX :- 
// const header = (
//     <div>
//         <h1>Hii this is heading</h1>
//     </div>
// );


/*
React component
    --> Two types of components
        1. Functional component : New way of write component
        2. Class base component : Old way of write component
    --> Concept 
        -> functional component is just a javascript function
        -> return JSX


        # use react element to react component
            syntax: 
                {heading}
*/

const header = (
    <div>
        <h1>Hii this is heading</h1>
    </div>
);

const HeaderComponent1 = () => {
    return (
        <div>
            <h1>Header</h1>
            {header}
            <p>Paragraph</p>
            <p>Paragraph</p>
        </div>
    );
}

let ans = 100;
let stringName = "jaymin darji"


const HeaderComponent2 = () => {
    return (
        <div>
            <h1>Header</h1>
            <p>Paragraph</p>
            <p>Paragraph</p>
            {ans}
            {stringName}
            <HeaderComponent1 />
        </div>
    );
}
// const HeaderComponent = () => {
//     return (
//         <h1>This is functional component</h1>
//     );
// }


const root = ReactDOM.createRoot(
    document.getElementById("root")
)

root.render(<HeaderComponent2 />);