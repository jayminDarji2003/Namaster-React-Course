import { useState, useEffect } from "react"

// Functional component

const FooterClass = (props) => {
    const [name, setName] = useState("Akshay Saini");
    const [parentName, setParentName] = useState("Mukharji Saini");
    //console.log("render functional component");

    // useEffect(() => {
    //     console.log("useEffect called");
    //     // setInterval(() => {
    //     //     console.log("jaymin darji");
    //     // }, 1000);

    //     // this function is called when you unmounting this component
    //     return () => {
    //         console.log("component change");
    //     }
    // }, [])

    // console.log("render()");

    return (
        <div className="footer">
            <h1 >Hello, {props.name} here!</h1>
            <h2>This is  functional component</h2>
            <h3>NAME : {name}</h3>
            <button onClick={() => {
                setName("Rutvi Dave");
                setParentName("Rajubhai dave")
            }}>Change name</button>
        </div>
    )
}



// Class base component
/*
import { Component } from "react";

class FooterClass extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     userInfo: {
        //         id: 101,
        //         name: "dummy",
        //     },
        //     loading: true,
        // };
    }

    componentDidMount() {
        console.log("component did mount");
        // setInterval(() => {
        //     console.log("JAYMIN DARJI CALLED");
        // });

        // const data = await fetch("https://api.github.com/users/jaymindarji2003");
        // const json = await data.json();

        // console.log(json);

        // this.setState({
        //     userInfo: json,
        //     loading: false,
        // });

        // console.log(this.state.userInfo);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    render() {
        return (
            <div className="footer">
                <p>This is footer</p>
                 {<p>id : {this.state.userInfo.id}</p>
                 <p>name : {this.state.userInfo.name}</p>
                 <img src={this.state.userInfo.avatar_url} alt="image is not able to see." /> }
            </div>
        )
    }
}


*/

export default FooterClass