// import { useEffect } from "react"
// import "../Assets/CSS/Rough.css"
// import cartImg from "../Assets/Images/cart_gif.gif"

// function Cart() {

//     useEffect(() => {
//         console.log("useEffect");
//         // this function is called when you unmounting this component

//         return () => {
//             console.log("useEffect return");
//         }
//     }, [])

//     console.log("render()");

//     return (
//         <>
//             <div className="Outercontainer">
//                 <img className="gifImg" src={cartImg} autoPlay loop />
//                 <h2>This is CART</h2>
//                 <p>No item added here 🎉</p>
//             </div>
//         </>
//     )
// }

// export default Cart



import { useEffect } from "react";
import "../Assets/CSS/Rough.css";
import cartImg from "../Assets/Images/cart_gif.gif";

function Cart() {
    useEffect(() => {
        console.log("useEffect");
        const timer = setInterval(() => {
            console.log("jaymin darji");
        }, 1000);

        // This function is called when unmounting this component
        return () => {
            clearInterval(timer);
            console.log("useEffect return");
        };
    }, []);

    console.log("render()");

    return (
        <>
            <div className="Outercontainer">
                <img className="gifImg" src={cartImg} autoPlay loop />
                <h2>This is CART</h2>
                <p>No items added here 🎉</p>
            </div>
        </>
    );
}

export default Cart;
