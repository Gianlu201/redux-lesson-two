import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Footer = () => {
  const booksArray = useSelector((state) => state.book.stock);
  const booksError = useSelector((state) => state.book.error);

  return (
    <footer className='epizon-footer'>
      <span className='text-muted d-block'>
        Epizon {new Date().getFullYear()}©
      </span>
      {!booksError && (
        <span>Nello store ci sono {booksArray.length} libri</span>
      )}
      {booksError && <Alert variant='danger'>{booksError}</Alert>}
    </footer>
  );
};

export default Footer;
