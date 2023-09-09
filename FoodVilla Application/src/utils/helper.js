export function filterRestaurant(searchTxt, restaurants) {
    // filterRestaurants -> store array of objects of filtered restaurants.
    const filterRestaurants = restaurants.filter((restaurant) => {
        return restaurant?.info?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
    });

    return filterRestaurants;
}
