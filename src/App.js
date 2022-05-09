import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

// App needs to store the cart array and share it with the three affected components:
// CartIndicator (needs to read the length of the cart array)
// Cart (will show the books in the cart and evaluate the total cost)
// BookDetail has the "add to cart" button that we need to connect

// golden rules of hooks:
// 1) use react hooks just in functional components
// 2) use hooks just at the TOP LEVEL of your component, before the return statement

const App = () => {
  // we can use hooks here!
  const [cart, setCart] = useState([])

  const addToCart = (book) => {
    setCart([...cart, book])
    // setCart sets a new value to cart
    // we're assigning to cart a new array: with all the elements we had before (...cart)
    // and appending at the end the new book we want to insert in the cart
  }

  const removeFromCart = (index) => {
    // let's remove ONE element from the cart!
    // the splice() method
    // it's not safe to use splice() on cart, because it modifies the array in-place!
    // and you're supposed to change the value of cart JUST with setCart
    // so let's create a copy of the cart array and work on it!
    // let cartCopy = [...cart] // <-- this is a proper copy of cart!
    // now it's safe to use splice() on cartCopy
    // cartCopy.splice(index, 1)
    // setCart(cartCopy)
    // the filter() method
    let newCart = cart.filter((book, i) => index !== i)
    setCart(newCart)
  }

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div">
            <Link to="/">
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator cartLength={cart.length} />
        </Row>
        <hr />
        <Routes>
          <Route path="/" element={<BookStore addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
