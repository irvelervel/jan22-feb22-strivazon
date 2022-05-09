import { Card } from 'react-bootstrap'

const Book = ({ book, changeBook, bookSelected }) => (
  <Card
    className={bookSelected?.id === book.id ? 'border-thick mt-3' : 'mt-3'}
    // the check above is necessary for EACH card for knowing if they are the selected one
    // the ? after bookSelected is called OPTIONAL CHAINING
    // bookSelected initially is NULL, and reading any property out of NULL will crash the app :(
    // the optional chaining makes sure I'm accessing the id property of bookSelected just if bookSelected is TRUTHY
    onClick={() => changeBook(book)}
    style={{ cursor: 'pointer' }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={book.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="font-weight-bold">{book.title}</Card.Text>
        <p>{book.price}</p>
      </div>
    </Card.Body>
  </Card>
)

export default Book
