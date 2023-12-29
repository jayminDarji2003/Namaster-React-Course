import './App.css'

function Header() {
  return (
    <h1>Header component</h1>
  )
}
function Main() {
  return (
    <h1>Main component</h1>
  )
}
function Footer() {
  return (
    <h1>Footer component</h1>
  )
}


function App() {
  return (
    <>
      <h1>Welcome to foodvilla application</h1>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
