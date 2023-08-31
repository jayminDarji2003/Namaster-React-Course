import { useState } from "react"

// Functional component
// const FooterClass = (props) => {
//     const [name] = useState("Akshay Saini");
//     const [parentName] = useState("Mukharji Saini")

//     return (
//         <div>
//             <h1 className="footer">Hello, {props.name} here!</h1>
//             <h2>This is  functional component</h2>
//             <h3>NAME : {name}</h3>
//         </div>
//     )
// }



// Class base component
import { Component } from "react";

class FooterClass extends Component {

    constructor(props) {
        super(props);
        // create state here
        this.state = {
            name: "Akshay Saini",
            parentName: "Mukharji Saini"
        };
    }

    render() {

        return <div className="footer">
            <h1>Hello, {this.props.name} here!</h1>
            <h2>his is class base component</h2>
            <h3>NAME : {this.state.name}</h3>
            <h3>Parent Name : {this.state.parentName}</h3>
        </div>

    }
}



export default FooterClass