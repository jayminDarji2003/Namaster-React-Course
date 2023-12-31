import React from "react";
import RestaurantCard from "./RestaurantCard";

const resData = [
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

const RestaurantsInfo = resData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

function RestaurantList() {
    return (
        <>
            <p className='text-2xl ml-44 mt-10 mb-3 font-bold'>Top restaurants in Ahmedabad</p>
            <div className="flex flex-wrap justify-center">
                {
                    RestaurantsInfo.map((restaurant, index) => {
                        return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                    })
                }
            </div>
        </>
    )
}

export default RestaurantList;