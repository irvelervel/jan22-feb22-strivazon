import { Component } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { Col, Row } from 'react-bootstrap'

class BookStore extends Component {
  state = {
    books: [],
    bookSelected: null,
  }

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      // this endpoint returns you an ARRAY of BOOKS
      if (resp.ok) {
        let books = await resp.json()
        this.setState({ books: books })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    }
  }

  changeBook = (book) => this.setState({ bookSelected: book })

  render() {
    return (
      <Row>
        <Col md={4}>
          <BookList
            bookSelected={this.state.bookSelected}
            changeBook={this.changeBook}
            books={this.state.books}
          />
        </Col>
        <Col md={8}>
          <BookDetail
            bookSelected={this.state.bookSelected}
            addToCart={this.props.addToCart}
            // we're receiving this.props.addToCart from App
          />
        </Col>
      </Row>
    )
  }
}

export default BookStore
