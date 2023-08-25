import { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import Shimmer from './Shimmer';


function filterData(searchTxt, restaurants) {
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
    // setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  // not render component (Early return)
  // if (!allRestaurants) return null;

  // filtered restaurants not found
  // if (filteredRestaurants?.length === 0) {
  //   return (
  //     <>
  //       <h3>Please Enter Valid input!!</h3>
  //     </>
  //   )
  // }

  return (
    <>

      {/* search component start here  */}
      <div className='search-container'>
        <input
          type="text"
          className='search-input'
          placeholder='Search Any Restaurant'
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button onClick={() => {
          // need to filter data 
          const data = filterData(searchTxt, allRestaurants);
          // update the state
          setFilteredRestaurants(data);
        }}>Search</button>
      </div>

      {/* main/body component start here  */}
      {
        (allRestaurants && allRestaurants.length === 0) ? <Shimmer /> :
          <div className='main'>
            {allRestaurants.map((restaurant) => (
              <Card {...restaurant.info} key={restaurant.info.id} />
            ))}
          </div>
      }
      
    </>
  );
}

export default Body;
