import React from 'react'
import '../App.css'
import Card from './Card'

// Config Driven UI
const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "KFC",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://www.thetechoutlook.com/wp-content/uploads/2020/08/THE-KFC-SUPER-7-DAYS-ARE-HERE.jpg",
      "cuisines": [
        "American",
        "Snack",
        "Biryani"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Subway",
      "city": "22",
      "area": "Himaliya mall vastrapur",
      "rating": "4.2",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
      "cuisines": [
        "Fast Food",
        "Healthy Food",
        "Salads"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "Subway, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "McDonald's",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
      "cuisines": [
        "Burger",
        "Beverages",
        "Coffee"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Burger King",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "American",
        "Snack",
        "Burger"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Gwalia Sweets & Fast Food",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mglb0z3qdofmpfd7qauw",
      "cuisines": [
        "Sweets",
        "North Indian",
        "Chaat"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Vadilal Ice Creams",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/w7uasop2mjridypc8wcc",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Paldi & Marvadi"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Starbucks Coffee",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4df3497f1460dfd1ecd8125222f6d362",
      "cuisines": [
        "Cafe",
        "Beverages",
        "Snacks"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "The Belgian Waffle",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yu9qn1hileenywrj45gb",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "LunchBox - Meals and Thalis",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ohhbevxuw3iucwxw3x09",
      "cuisines": [
        "Biryani",
        "Punjabi",
        "Dhosa"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Pizza Hut",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      "cuisines": [
        "Pizza",
        "Pasta",
        "Roles"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "73011",
      "name": "Faasos - Wraps & Rolls",
      "city": "22",
      "area": "Anand Vihar Conony",
      "rating": "4.5",
      "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/af33b81798b11deba338e94b7585d348",
      "cuisines": [
        "American",
        "Snack",
        "Biryani"
      ],
      "costForTwo": 3000,
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "cityState": "22",
      "address": "KFC restaurant, near Ranip DMatt",
      "locality": "Clock Tower",
      "parentId": 547,
      "veg": false,
      "select": false,
      "favoutite": false
    }
  },
]

function BodyComp() {
  return (
    <main>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default BodyComp
