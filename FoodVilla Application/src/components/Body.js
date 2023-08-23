import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card';
import { restaurantList } from '../config';


function filterData(searchTxt, restaurants) {
  const filterRes = restaurants.filter((restaurant) => {
    return restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase());
  });

  return filterRes;
}


function Body() {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    console.log("render useEffect")
  }, [])

  console.log("reder")

  /*
    useEffect :-
        -> if didn't pass [], then it call every time when page re-render
        -> [] called once
        -> [restaurants] , restaurants is a dependency and it useEffect calls when the restaurants chnges
        -> useEffect call after the page load
  */

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
          const data = filterData(searchTxt, restaurants);
          // update the state
          setRestaurants(data);
        }}>Search</button>
      </div>
      {/* search component ends here  */}


      {/* main/body component start here  */}
      <div className='main'>
        {restaurants.map((restaurant) => (
          <Card {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
      {/* main/body component ends here  */}

    </>
  );
}

export default Body;


