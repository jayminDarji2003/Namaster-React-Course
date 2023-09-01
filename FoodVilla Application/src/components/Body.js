import { useEffect, useState } from 'react';
import '../Assets/CSS/App.css'
import Card from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurants() {
  //   try {
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const json = await data.json();

  //     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //     setIsLoading(false);
  //   }
  //   catch (error) {
  //     console.log("Error while fetching restaurant data.")
  //     setIsLoading(false);
  //   }
  // }


  function getRestaurants() {
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then(response => response.json())
      .then(json => {
        const restaurantsData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllRestaurants(restaurantsData);
        setFilteredRestaurants(restaurantsData);
        setIsLoading(false);
        // console.log(restaurantsData);  // empty right now, so don't get restaurant data. 
      })
      .catch(error => {
        console.log("Error while fetching restaurant data:", error);
        setIsLoading(false);
      });
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


  // Early return
  if (!filterRestaurant) {
    return null;
  }

  return (
    <>
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

      {
        isLoading ? <Shimmer /> : (
          <div className='main'>
            {filteredRestaurants.length === 0 ? (
              <h2>Oops!! - Something went wrong</h2>
            ) :
              filteredRestaurants.map((restaurant) => (
                <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                  <Card {...restaurant.info} />
                </Link>
              ))
            }
          </div>
        )
      }

    </>
  );
}

export default Body;
