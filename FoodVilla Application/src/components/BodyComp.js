import React from 'react'
import '../App.css'
import Card from './Card'
import { restaurantList } from '../config'
import Search from './Search'

function BodyComp() {
  return (
    <>
      <Search />
      <div className='main'>
        {
          restaurantList.map((restaurant) => {
            return <Card {...restaurant.data} key={restaurant.data.id} />;
          })
        }
      </div>
    </>
  )
}

export default BodyComp
