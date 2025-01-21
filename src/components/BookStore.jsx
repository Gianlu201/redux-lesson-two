import { useState, useEffect } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import BookList from './BookList';
import BookDetail from './BookDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../redux/actions';

const BookStore = () => {
  // const [books, setBooks] = useState([]);
  const [bookSelected, setBookSelected] = useState(null);

  const dispatch = useDispatch();

  const booksArray = useSelector((state) => state.book.stock);
  const booksError = useSelector((state) => state.book.error);

  useEffect(() => {
    // getBooks();

    dispatch(getBooksAction());
  }, []);

  // const getBooks = async () => {
  //   try {
  //     let resp = await fetch(
  //       'https://striveschool-api.herokuapp.com/food-books'
  //     );
  //     if (resp.ok) {
  //       let fetchedBooks = await resp.json();
  //       setBooks(fetchedBooks);
  //     } else {
  //       console.log('error');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const changeBook = (book) => setBookSelected(book);

  return (
    <Row className='center-row'>
      <Col lg={4}>
        {booksError && <Alert variant='danger'>{booksError}</Alert>}

        <BookList
          bookSelected={bookSelected}
          changeBook={changeBook}
          books={booksArray} // qui passo i libri ora dal Redux Store
        />
      </Col>
      <Col lg={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  );
};

export default BookStore;
