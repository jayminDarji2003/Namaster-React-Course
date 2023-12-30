// import Carousel from "./Components/Carousel"
import Header from "./Components/Header"
import RestaurantList from "./Components/RestaurantList"

/*
  Project structure :-

  Header
    - Logo
    - Nav Items (right navigation)
    - cart
  Body
    - Search bar
    - Restaurant list
      - Restaurant Card
        - Image
        - Restaurant name
        - Cusines 
        - Rating
  Footer
    - Links
    - Copyright

*/

function App() {
  return (
    <>
      <Header />
      {/* <Carousel /> */}
      <RestaurantList />
    </>
  )
}

export default App