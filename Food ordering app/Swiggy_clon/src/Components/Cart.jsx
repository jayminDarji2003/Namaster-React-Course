import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <div className="flex justity-center items-center flex-col h-screen w-screen">
        <img src="empty_cart.png" alt="image" className="h-96" />
        <p className="text-xl font-bold my-3">Your cart is empty.</p>
        <Link to="/" className="bg-[#fc8019] p-2 text-white font-bold">
          CHECK RESTAURANT FOOD
        </Link>
      </div>
    </>
  );
}

export default Cart;
