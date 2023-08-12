import React, { useState, useEffect } from 'react';
import '../App.css';
import Card from './Card';
import { restaurantList } from '../config';
// search more need fnx
import { debounce } from 'lodash';

function capitalCase(text) {
  const words = text.split(" ");
  const capitalizedWords = words.map((word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return capitalizedWords.join(" ");
}

function filterData(searchTxt, restaurants) {
  if (!searchTxt.trim()) {
    return restaurants;
  }

  const upperTxt = searchTxt.toUpperCase();
  const lowerTxt = searchTxt.toLowerCase();
  const capTxt = capitalCase(searchTxt);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const name = restaurant.data.name;
    return (
      name.includes(capTxt) || name.includes(upperTxt) || name.includes(lowerTxt)
    );
  });

  return filteredRestaurants;
}


function BodyComp() {
  const [searchTxt, setSearchTxt] = useState("");
  const [originalRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(originalRestaurants);

  const handleSearch = () => {
    const filteredData = filterData(searchTxt, originalRestaurants);
    setFilteredRestaurants(filteredData);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleBlur = () => {
    if (!searchTxt.trim()) {
      setFilteredRestaurants(originalRestaurants);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTxt(inputValue);

    if (!inputValue.trim()) {
      setFilteredRestaurants(originalRestaurants);
    }
  };


  // ading search more fnx
  // Inside the BodyComp component
  const delayedSearch = debounce(handleSearch, 300); // Debounce the handleSearch function

  useEffect(() => {
    delayedSearch(); // Call the debounced handleSearch function
    return delayedSearch.cancel; // Clean up the debounce timer on unmount
  }, [searchTxt]);

  const noResultsMessage = "Please give a valid input.";



  return (
    <>
      <div className='search-container'>
        <input
          type="text"
          className='search-input'
          placeholder='Search Any Restaurant'
          value={searchTxt}
          onChange={handleInputChange} // Call handleInputChange function on input change
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
        />
        <button onClick={handleSearch}>Search</button>
      </div>


      {/* <div className='main'>
        {filteredRestaurants.map((restaurant) => (
          <Card {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div> */}


      {/* // more search functionlity */}

      <div className='main'>
        {filteredRestaurants.length === 0 ? (
          <p className="no-results-message">{noResultsMessage}</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Card {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
}

export default BodyComp;


