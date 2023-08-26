import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();  // destructuring on fly

    return (
        <>
            <h1>Restaurant id: {resId}</h1>
            <h2>Burger King</h2>
        </>
    )
}

export default RestaurantMenu;