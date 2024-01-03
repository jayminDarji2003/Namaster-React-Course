import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurantsInfo }) {
    const restaurants = restaurantsInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return (
        <>
            {
                <>
                    <p className='text-2xl ml-44 mt-10 mb-3 font-bold'>Top restaurants in Ahmedabad</p>
                    <div className="flex flex-wrap justify-center">
                        {
                            restaurants?.length === 0 ? <h1>Not restaurant found</h1> : restaurants.map((restaurant) => {
                                return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                            })
                        }
                    </div>
                </>
            }
        </>

    )
}

export default RestaurantList;





