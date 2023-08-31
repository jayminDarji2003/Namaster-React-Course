import { useState } from "react"

// Functional component
// const FooterClass = (props) => {
//     const [name, setName] = useState("Akshay Saini");
//     const [parentName,setParentName] = useState("Mukharji Saini")

//     return (
//         <div className="footer">
//             <h1 >Hello, {props.name} here!</h1>
//             <h2>This is  functional component</h2>
//             <h3>NAME : {name}</h3>
//             <button onClick={() => {
//                 setName("Rutvi Dave");
//                 setParentName("Rajubhai dave")
//             }}>Change name</button>
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
            <button onClick={() => {
                // we do not mutate state directly
                // never do like this : this.state.name = "rutvi dave"
                this.setState({
                    name: "Rutvi Dave",
                    parentName: "Rajubhai dave"
                })
            }}>Change name</button>
        </div>

    }
}



export default FooterClass