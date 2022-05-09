import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'

const Cart = ({ cart, removeFromCart }) => (
  // cart is supposed to be a prop of the Cart component
  // it is supposed to be the array of books!
  // but in App.js I'm invoking Cart WITHOUT props!
  // so the cart props is UNDEFINED! so it gets the DEFAULT VALUE, an []
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: 'none' }}>
        {cart.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromCart(i)}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{' '}
        {cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
)

export default Cart
