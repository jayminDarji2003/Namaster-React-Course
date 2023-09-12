import { useEffect } from "react";
import cartImg from "../Assets/Images/cart_gif.gif";

function Cart() {
    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("jaymin darji");
        }, 1000);

        // This function is called when unmounting this component
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <div className="mt-7 flex justify-center items-center flex-col">
                <img className="w-40 sm:w-52 md:w-72 lg:w-80 xl:w-96 rounded-[50%] mb-3" src={cartImg} autoPlay loop />
                <h2 className="text-xl font-bold text-blue-500">This is CART</h2>
                <p>No items added here 🎉</p>
            </div>
        </>
    );
}

export default Cart;
