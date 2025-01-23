import PropTypes from "prop-types";
import { Link } from "react-router";
import './bookTable.css'
const BooksTable = ({ books, onDelete }) => {
  if (!books.length) {
    return <div className="no-books-message">there is no book </div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Oprations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((el) => (
          <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.author}</td>
            <td>
              <button
                onClick={() => {
                  onDelete(el.id);
                }}
                className="delete-button"
              >
                Delete
              </button>
              <Link to={`/update/${el.id}`}>
                <button className="update-button">Update</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export { BooksTable };
