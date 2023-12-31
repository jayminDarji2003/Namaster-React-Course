// Here we are putting hardcoded values

export const SWIGGY_API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const RESTAURANT_IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const RESTAURANT_FOOD_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029857/";

export const resData = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "header": {
                    "title": "Top restaurant chains in Ahmedabad",
                    "action": {

                    },
                    "headerStyling": {
                        "padding": {
                            "left": 16,
                            "top": 28,
                            "bottom": 18
                        }
                    }
                },
                "layout": {
                    "rows": 1,
                    "columns": 20,
                    "horizontalScrollEnabled": true,
                    "itemSpacing": 32,
                    "widgetPadding": {

                    },
                    "containerStyle": {
                        "containerPadding": {
                            "left": 16,
                            "right": 12,
                            "bottom": 12
                        }
                    },
                    "scrollBar": {
                        "scrollThumbColor": "#E46D47",
                        "scrollTrackColor": "#02060C",
                        "width": 54,
                        "height": 4,
                        "scrollStyling": {
                            "padding": {
                                "top": 6,
                                "bottom": 24
                            }
                        }
                    },
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        },
                        "darkMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "id": "top_brands_for_you",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                        "restaurants": [
                            {
                                "info": {
                                    "id": "47589",
                                    "name": "Pizza Hut",
                                    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                    "locality": "City Gold Complex",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Pizzas"
                                    ],
                                    "avgRating": 4,
                                    "parentId": "721",
                                    "avgRatingString": "4.0",
                                    "totalRatingsString": "5K+",
                                    "sla": {
                                        "deliveryTime": 23,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "23 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 03:00:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "60% OFF",
                                        "subHeader": "UPTO ₹120"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/pizza-hut-city-gold-complex-navrangpura-ahmedabad-47589",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "81814",
                                    "name": "Burger King",
                                    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                                    "locality": "3rd Eye II,CG Road",
                                    "areaName": "Ellisbridge",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "American",
                                        "Salads",
                                        "Beverages",
                                        "Chaat"
                                    ],
                                    "avgRating": 4.2,
                                    "parentId": "166",
                                    "avgRatingString": "4.2",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 19,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "19 mins",
                                        "   ": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 02:45:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "60% OFF",
                                        "subHeader": "UPTO ₹120"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/burger-king-3rd-eye-ii-cg-road-ellisbridge-ahmedabad-81814",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "236436",
                                    "name": "Starbucks Coffee",
                                    "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
                                    "locality": "Prahlad Nagar Satellite",
                                    "areaName": "Prahlad Nagar",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Beverages",
                                        "Cafe",
                                        "Snacks",
                                        "Desserts",
                                        "Bakery",
                                        "Ice Cream"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "195515",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 30,
                                        "lastMileTravel": 6.6,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30 mins",
                                        "lastMileTravelString": "6.6 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:59:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "textExtendedBadges": [
                                            {
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "",
                                                            "fontColor": "#7E808C",
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹200 OFF",
                                        "subHeader": "ABOVE ₹999",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/starbucks-coffee-satellite-prahlad-nagar-ahmedabad-236436",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "52630",
                                    "name": "McDonald's",
                                    "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                                    "locality": "Ellis Bridge",
                                    "areaName": "City Gold The Multiplex- Ashram Road",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "Beverages",
                                        "Cafe",
                                        "Desserts"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "630",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 16,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "16 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 03:45:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "FREE ITEM"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/mcdonalds-ellis-bridge-city-gold-the-multiplex-ashram-road-ahmedabad-52630",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "395939",
                                    "name": "KFC",
                                    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                                    "locality": "Panchwati Cross",
                                    "areaName": "Paldi & Ambawadi",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "Biryani",
                                        "American",
                                        "Snacks",
                                        "Fast Food"
                                    ],
                                    "avgRating": 4.2,
                                    "parentId": "547",
                                    "avgRatingString": "4.2",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 14,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "14 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 04:00:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "50% OFF",
                                        "subHeader": "UPTO ₹100"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/kfc-panchwati-cross-paldi-and-ambawadi-ahmedabad-395939",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "36969",
                                    "name": "Domino's Pizza",
                                    "cloudinaryImageId": "il4hgznny2evcxg607h5",
                                    "locality": "Near Law Garden",
                                    "areaName": "Ellisbridge",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Pizzas",
                                        "Italian",
                                        "Pastas",
                                        "Desserts"
                                    ],
                                    "avgRating": 4,
                                    "veg": true,
                                    "parentId": "2456",
                                    "avgRatingString": "4.0",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 20,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "20 mins",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 01:55:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "50% OFF",
                                        "subHeader": "UPTO ₹100"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-law-garden-ellisbridge-ahmedabad-36969",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "40831",
                                    "name": "Subway",
                                    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                                    "locality": "Mithakali",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Healthy Food",
                                        "Salads",
                                        "Snacks",
                                        "Desserts",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "2",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 20,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "20 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:59:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/subway-mithakali-navrangpura-ahmedabad-40831",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "378472",
                                    "name": "La Pino'z Pizza",
                                    "cloudinaryImageId": "haujstay6r8mbuxfgwzq",
                                    "locality": "Maninagar",
                                    "areaName": "Khokhara",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Pizzas",
                                        "Pastas",
                                        "Italian",
                                        "Desserts",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.4,
                                    "veg": true,
                                    "parentId": "4961",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 36,
                                        "lastMileTravel": 6.3,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "36 mins",
                                        "lastMileTravelString": "6.3 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹125 OFF",
                                        "subHeader": "ABOVE ₹699",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-maninagar-khokhara-ahmedabad-378472",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "37578",
                                    "name": "Gwalia Sweets & Fast Food",
                                    "cloudinaryImageId": "mglb0z3qdofmpfd7qauw",
                                    "locality": "Stadium Circle",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹300 for two",
                                    "cuisines": [
                                        "Sweets",
                                        "North Indian",
                                        "Chaat",
                                        "Snacks",
                                        "Bakery",
                                        "Desserts",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.5,
                                    "veg": true,
                                    "parentId": "92340",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 17,
                                        "lastMileTravel": 2.2,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "17 mins",
                                        "lastMileTravelString": "2.2 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "40% OFF",
                                        "subHeader": "UPTO ₹80"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/gwalia-sweets-and-fast-food-stadium-circle-navrangpura-ahmedabad-37578",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "50934",
                                    "name": "Choice Snack Bar",
                                    "cloudinaryImageId": "sj8eh6dtxlplwc5a5vl3",
                                    "locality": "C G Road",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Pizzas",
                                        "Chinese",
                                        "South Indian",
                                        "Fast Food",
                                        "Street Food",
                                        "American",
                                        "Italian",
                                        "Beverages",
                                        "Desserts"
                                    ],
                                    "avgRating": 4.5,
                                    "veg": true,
                                    "parentId": "4866",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 19,
                                        "lastMileTravel": 2.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "19 mins",
                                        "lastMileTravelString": "2.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "UPTO ₹40"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/choice-snack-bar-c-g-road-navrangpura-ahmedabad-50934",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "65400",
                                    "name": "New Freeze Land",
                                    "cloudinaryImageId": "vvscudt4hnlffogfphbo",
                                    "locality": "Law garden",
                                    "areaName": "Ellisbridge",
                                    "costForTwo": "₹45 for two",
                                    "cuisines": [
                                        "Cafe",
                                        "American",
                                        "Chinese",
                                        "Street Food",
                                        "Italian",
                                        "North Indian",
                                        "Pizzas",
                                        "Beverages",
                                        "Desserts"
                                    ],
                                    "avgRating": 4.5,
                                    "veg": true,
                                    "parentId": "146514",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 22,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "22 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 02:45:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/new-freeze-land-law-garden-ellisbridge-ahmedabad-65400",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "72430",
                                    "name": "Vipul Dudhiya Sweets",
                                    "cloudinaryImageId": "sdatp7pqqctty8i3j3t8",
                                    "locality": "Mahalaxmi Cross Road",
                                    "areaName": "Paldi",
                                    "costForTwo": "₹300 for two",
                                    "cuisines": [
                                        "Sweets",
                                        "Snacks"
                                    ],
                                    "avgRating": 4.5,
                                    "veg": true,
                                    "parentId": "223924",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 15,
                                        "lastMileTravel": 1.9,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "15 mins",
                                        "lastMileTravelString": "1.9 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 21:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "UPTO ₹40"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/vipul-dudhiya-sweets-mahalaxmi-cross-road-paldi-ahmedabad-72430",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "395171",
                                    "name": "McDonald's Gourmet Burger Collection",
                                    "cloudinaryImageId": "u8zdarvfkyqzh9nhqzsk",
                                    "locality": "City Gold Multiplex, Ashram Road",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹500 for two",
                                    "cuisines": [
                                        "Burgers",
                                        "Beverages",
                                        "Cafe",
                                        "Desserts"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "10761",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "100+",
                                    "sla": {
                                        "deliveryTime": 16,
                                        "lastMileTravel": 1.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "16 mins",
                                        "lastMileTravelString": "1.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 01:45:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {

                                    },
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-city-gold-multiplex-ashram-road-navrangpura-ahmedabad-395171",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "50148",
                                    "name": "Upper Crust",
                                    "cloudinaryImageId": "ary6erlpml3to1nt8mbv",
                                    "locality": "Navrangpura",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹500 for two",
                                    "cuisines": [
                                        "American",
                                        "Indian",
                                        "Italian",
                                        "Chinese",
                                        "Continental",
                                        "Bakery"
                                    ],
                                    "avgRating": 4.6,
                                    "parentId": "4740",
                                    "avgRatingString": "4.6",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 29,
                                        "lastMileTravel": 3.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "29 mins",
                                        "lastMileTravelString": "3.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 22:45:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "newg.png",
                                                "description": "Gourmet"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Gourmet",
                                                            "imageId": "newg.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹50 OFF",
                                        "subHeader": "ABOVE ₹999",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/upper-crust-navrangpura-ahmedabad-50148",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "91930",
                                    "name": "Swati Snacks",
                                    "cloudinaryImageId": "g6xg0octgknysvln5wxd",
                                    "locality": "Ellis Bridge",
                                    "areaName": "Ellisbridge",
                                    "costForTwo": "₹600 for two",
                                    "cuisines": [
                                        "Gujarati",
                                        "Indian",
                                        "South Indian",
                                        "Desserts",
                                        "Ice Cream",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.7,
                                    "veg": true,
                                    "parentId": "8581",
                                    "avgRatingString": "4.7",
                                    "totalRatingsString": "5K+",
                                    "sla": {
                                        "deliveryTime": 19,
                                        "lastMileTravel": 1.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "19 mins",
                                        "lastMileTravelString": "1.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "newg.png",
                                                "description": "Gourmet"
                                            },
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Gourmet",
                                                            "imageId": "newg.png"
                                                        }
                                                    },
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹50 OFF",
                                        "subHeader": "ABOVE ₹199",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/swati-snacks-ellis-bridge-ellisbridge-ahmedabad-91930",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "36659",
                                    "name": "The Belgian Waffle Co.",
                                    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                                    "locality": "Near Bank Of Maharashtra",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Waffle",
                                        "Desserts",
                                        "Ice Cream",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.6,
                                    "veg": true,
                                    "parentId": "2233",
                                    "avgRatingString": "4.6",
                                    "totalRatingsString": "5K+",
                                    "sla": {
                                        "deliveryTime": 27,
                                        "lastMileTravel": 3.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "27 mins",
                                        "lastMileTravelString": "3.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 02:30:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-near-bank-of-maharashtra-navrangpura-ahmedabad-36659",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "37934",
                                    "name": "Faasos - Wraps, Rolls & Shawarma",
                                    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                                    "locality": "SV Desai Marg",
                                    "areaName": "CG Road RK",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Kebabs",
                                        "Fast Food",
                                        "Snacks",
                                        "American",
                                        "Healthy Food",
                                        "Desserts",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "21809",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 29,
                                        "lastMileTravel": 3.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "29 mins",
                                        "lastMileTravelString": "3.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 23:59:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "textExtendedBadges": [
                                            {
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "",
                                                            "fontColor": "#7E808C",
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available"
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "60% OFF",
                                        "subHeader": "UPTO ₹110"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-sv-desai-marg-cg-road-rk-ahmedabad-37934",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "59957",
                                    "name": "Shakti - The Sandwich Shop",
                                    "cloudinaryImageId": "jfxo48cxmd2i3ysh2ul6",
                                    "locality": "Aryan Work Spaces, Gulbai tekra",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹300 for two",
                                    "cuisines": [
                                        "Snacks",
                                        "Pizzas"
                                    ],
                                    "avgRating": 4.3,
                                    "veg": true,
                                    "parentId": "4936",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 22,
                                        "lastMileTravel": 2.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "22 mins",
                                        "lastMileTravelString": "2.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 04:00:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "60% OFF",
                                        "subHeader": "UPTO ₹120"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/shakti-the-sandwich-shop-aryan-work-spaces-gulbai-tekra-navrangpura-ahmedabad-59957",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "353709",
                                    "name": "Marky Momos",
                                    "cloudinaryImageId": "yrcsv0rhaeuxvk1fbxyy",
                                    "locality": "Navrangpura",
                                    "areaName": "Navrangpura",
                                    "costForTwo": "₹600 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "Thalis",
                                        "Biryani",
                                        "Italian",
                                        "American",
                                        "Mongolian"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "4659",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 25,
                                        "lastMileTravel": 3.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "25 mins",
                                        "lastMileTravelString": "3.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-30 20:19:00",
                                        "opened": true
                                    },
                                    "badges": {

                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {

                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "50% OFF",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/marky-momos-navrangpura-ahmedabad-353709",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "107646",
                                    "name": "Honest",
                                    "cloudinaryImageId": "amkv7w0gbpxt4x7fpuho",
                                    "areaName": "C G Road",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "North Indian"
                                    ],
                                    "avgRating": 4.4,
                                    "veg": true,
                                    "parentId": "4930",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 21,
                                        "lastMileTravel": 1.9,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "21 mins",
                                        "lastMileTravelString": "1.9 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2023-12-31 00:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                "description": "pureveg"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "pureveg",
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {

                                            },
                                            "textExtendedBadges": {

                                            }
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "UPTO ₹40"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {

                                            },
                                            "video": {

                                            }
                                        }
                                    },
                                    "reviewsSummary": {

                                    },
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {

                                    }
                                },
                                "analytics": {

                                },
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/honest-c-g-road-ahmedabad-107646",
                                    "type": "WEBLINK"
                                }
                            }
                        ],
                        "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                        "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                        "style": {
                            "width": {
                                "type": "TYPE_RELATIVE",
                                "value": 0.41111112,
                                "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                            },
                            "height": {
                                "type": "TYPE_RELATIVE",
                                "value": 0.7027027,
                                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                            },
                            "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                        },
                        "collectionId": "84124"
                    }
                }
            }
        }
    },
];

export const foodItems = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "header": {
                    "title": "What's on your mind?",
                    "headerStyling": {
                        "padding": {
                            "left": 16,
                            "top": 16,
                            "bottom": 4
                        }
                    }
                },
                "layout": {
                    "rows": 1,
                    "columns": 10,
                    "horizontalScrollEnabled": true,
                    "itemSpacing": 24,
                    "widgetPadding": {

                    },
                    "containerStyle": {
                        "containerPadding": {
                            "left": 8,
                            "top": 8,
                            "right": 12,
                            "bottom": 4
                        }
                    },
                    "scrollBar": {

                    },
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#FFFFFF",
                            "theme": "THEME_TYPE_LIGHT"
                        },
                        "darkMode": {
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "imageGridCards": {
                    "info": [
                        {
                            "id": "750231",
                            "imageId": "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Poha.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80374?collection_id=80374&tags=layout_CCS_Poha&type=rcv2",
                                "text": "Poha",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for poha",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750562",
                            "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                                "text": "Vada",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for vada",
                                "altTextCta": "open"
                            },
                            "entityId": "80427",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750203",
                            "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                                "text": "Paratha",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for paratha",
                                "altTextCta": "open"
                            },
                            "entityId": "80476",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750226",
                            "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                                "text": "Salad",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for salad",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750123",
                            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                                "text": "Dhokla",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for dhokla",
                                "altTextCta": "open"
                            },
                            "entityId": "80423",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750132",
                            "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                "text": "Dosa",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for dosa",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "749879",
                            "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                                "text": "Chole Bhature",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for chhole bhatoore",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750644",
                            "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                                "text": "Idli",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for idly",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750230",
                            "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                                "text": "Samosa",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for samosa",
                                "altTextCta": "open"
                            },
                            "entityId": "80397",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750235",
                            "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                                "text": "Sandwich",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for sandwich",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750239",
                            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                "text": "Shake",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for shakes",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750640",
                            "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                                "text": "Kachori",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for kachori",
                                "altTextCta": "open"
                            },
                            "entityId": "80450",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750638",
                            "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                                "text": "Juice",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for juice",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "749874",
                            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                "text": "Cakes",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for cakes",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750258",
                            "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Thepla.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80409?collection_id=80409&tags=layout_BAU_Contextual%2Cthepla&type=rcv2",
                                "text": "Thepla",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for thepla",
                                "altTextCta": "open"
                            },
                            "entityId": "80409",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750599",
                            "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                                "text": "Coffee",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for coffee",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750560",
                            "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80418?collection_id=80418&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                                "text": "Vada Pav",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for vada pav",
                                "altTextCta": "open"
                            },
                            "entityId": "80418",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "749789",
                            "imageId": "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80468?collection_id=80468&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                                "text": "Omelette",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurant curated for omelette",
                                "altTextCta": "open"
                            },
                            "entityId": "80468",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "750605",
                            "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                                "text": "Tea",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for tea",
                                "altTextCta": "open"
                            },
                            "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                            "frequencyCapping": {

                            }
                        },
                        {
                            "id": "749761",
                            "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                            "action": {
                                "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                "text": "Khichdi",
                                "type": "WEBLINK"
                            },
                            "entityType": "BANNER",
                            "accessibility": {
                                "altText": "restaurants curated for khicdhi",
                                "altTextCta": "open"
                            },
                            "entityId": "80456",
                            "frequencyCapping": {

                            }
                        }
                    ],
                    "style": {
                        "width": {
                            "type": "TYPE_RELATIVE",
                            "value": 0.2941,
                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                        },
                        "height": {
                            "type": "TYPE_RELATIVE",
                            "value": 1.2444,
                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                        }
                    }
                },
                "id": "whats_on_your_mind",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                        "info": [
                            {
                                "id": "750231",
                                "imageId": "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Poha.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80374?collection_id=80374&tags=layout_CCS_Poha&type=rcv2",
                                    "text": "Poha",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for poha",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80374&tags=layout_CCS_Poha",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750562",
                                "imageId": "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80427?collection_id=80427&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                                    "text": "Vada",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for vada",
                                    "altTextCta": "open"
                                },
                                "entityId": "80427",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750203",
                                "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                                    "text": "Paratha",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for paratha",
                                    "altTextCta": "open"
                                },
                                "entityId": "80476",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750226",
                                "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                                    "text": "Salad",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for salad",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750123",
                                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80423?collection_id=80423&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                                    "text": "Dhokla",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for dhokla",
                                    "altTextCta": "open"
                                },
                                "entityId": "80423",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750132",
                                "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                    "text": "Dosa",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for dosa",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "749879",
                                "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
                                    "text": "Chole Bhature",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for chhole bhatoore",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750644",
                                "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
                                    "text": "Idli",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for idly",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750230",
                                "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                                    "text": "Samosa",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for samosa",
                                    "altTextCta": "open"
                                },
                                "entityId": "80397",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750235",
                                "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                                    "text": "Sandwich",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for sandwich",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750239",
                                "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                    "text": "Shake",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for shakes",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750640",
                                "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80450?collection_id=80450&tags=layout_BAU_Contextual%2Ckachori&type=rcv2",
                                    "text": "Kachori",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for kachori",
                                    "altTextCta": "open"
                                },
                                "entityId": "80450",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750638",
                                "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                                    "text": "Juice",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for juice",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "749874",
                                "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                    "text": "Cakes",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for cakes",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750258",
                                "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Thepla.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80409?collection_id=80409&tags=layout_BAU_Contextual%2Cthepla&type=rcv2",
                                    "text": "Thepla",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for thepla",
                                    "altTextCta": "open"
                                },
                                "entityId": "80409",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750599",
                                "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/83908?collection_id=83908&tags=layout_CCS_Coffee&type=rcv2",
                                    "text": "Coffee",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for coffee",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=83908&tags=layout_CCS_Coffee",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750560",
                                "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Vada_Pav.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80418?collection_id=80418&tags=layout_BAU_Contextual%2Cvada_pav&type=rcv2",
                                    "text": "Vada Pav",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for vada pav",
                                    "altTextCta": "open"
                                },
                                "entityId": "80418",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "749789",
                                "imageId": "v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80468?collection_id=80468&tags=layout_BAU_Contextual%2Comelette&type=rcv2",
                                    "text": "Omelette",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurant curated for omelette",
                                    "altTextCta": "open"
                                },
                                "entityId": "80468",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "750605",
                                "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                                    "text": "Tea",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for tea",
                                    "altTextCta": "open"
                                },
                                "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                                "frequencyCapping": {

                                }
                            },
                            {
                                "id": "749761",
                                "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                                "action": {
                                    "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                                    "text": "Khichdi",
                                    "type": "WEBLINK"
                                },
                                "entityType": "BANNER",
                                "accessibility": {
                                    "altText": "restaurants curated for khicdhi",
                                    "altTextCta": "open"
                                },
                                "entityId": "80456",
                                "frequencyCapping": {

                                }
                            }
                        ],
                        "style": {
                            "width": {
                                "type": "TYPE_RELATIVE",
                                "value": 0.2941,
                                "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                            },
                            "height": {
                                "type": "TYPE_RELATIVE",
                                "value": 1.2444,
                                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                            }
                        }
                    }
                }
            }
        }
    },
];
