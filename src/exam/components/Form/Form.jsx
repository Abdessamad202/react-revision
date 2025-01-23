import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Add, Update } from "../../slides/booksSlice";
import './form.css'
const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [book, setBook] = useState(
    id
      ? books.find((el) => el.id == id)
      : {
          id: !books.length ? 1 : books[books.length - 1].id + 1,
          title: "",
          autor: "",
        }
  );
  const handleClick = () => {
    if (id) {
      dispatch(Update({ book }));
    } else {
      dispatch(Add({ book }));
    }
    navigate("/");
  };
  return (
    <form action="">
      <input
        type="text"
        value={book.title}
        onChange={(e) =>
          setBook((book) => ({ ...book, title: e.target.value }))
        }
        placeholder="title"
        name=""
        id=""
      />
      <input
        type="text"
        placeholder="author"
        value={book.author}
        onChange={(e) =>
          setBook((book) => ({ ...book, author: e.target.value }))
        }
        name=""
        id=""
      />
      <button type="button" onClick={handleClick}>
        {!id ? "Add Book" : "Update Book"}
      </button>
    </form>
  );
};
export { Form };
