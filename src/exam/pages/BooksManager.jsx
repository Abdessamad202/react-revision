import { useDispatch, useSelector } from "react-redux";
import { BooksTable } from "../components/BookTable/BookTable";
import { Delete } from "../slides/booksSlice";
import { Add } from "../components/Add/Add";

const BookManager = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(Delete({ id }));
  };
  return (
    <>
      <Add />
      <BooksTable books={books} onDelete={handleDelete} />
    </>
  );
};
export { BookManager };
