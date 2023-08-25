import { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import Shimmer from './Shimmer';


function filterRestaurant(searchTxt, restaurants) {
  // filterRestaurants -> store array of objects of filtered restaurants.
  const filterRestaurants = restaurants.filter((restaurant) => {
    return restaurant?.info?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
  });

  return filterRestaurants;
}


function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);   // pass empty array
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);  // pass empty array
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTxt(inputValue);

    if (!inputValue.trim()) {
      setFilteredRestaurants(allRestaurants);
    }
  }

  const handleSearch = () => {
    // need to filter data 
    const data = filterRestaurant(searchTxt, allRestaurants);
    // update the state
    setFilteredRestaurants(data);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };


  return (
    <>

      {/* search component start here  */}
      <div className='search-container'>
        <input
          type="text"
          className='search-input'
          placeholder='Search Any Restaurant'
          value={searchTxt}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* main/body component start here  */}
      {/* {
        (allRestaurants.length === 0) ? <Shimmer /> :
          <div className='main'>
            {filteredRestaurants.map((restaurant) => (
              <Card {...restaurant.info} key={restaurant.info.id} />
            ))}
          </div>
      } */}

      {/* chatGPT give me this code  */}
      {
        allRestaurants.length > 0 ? (
          <div className='main'>
            {
              filteredRestaurants.length === 0 ? <h2>Please enter valid input</h2> :
                filteredRestaurants.map((restaurant) => (
                  <Card {...restaurant.info} key={restaurant.info.id} />
                ))
            }
          </div>
        ) : (
          <Shimmer /> 
        )
      }


    </>
  );
}

export default Body;
