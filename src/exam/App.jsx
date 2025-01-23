import { Routes, Route } from "react-router";
import { BookManager } from "./pages/BooksManager";
import { AddBook } from "./pages/AddBook";
import { UpdateBook } from "./pages/UpdateBook";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={"/"} element={<BookManager />}></Route>
        <Route path={"/add"} element={<AddBook />}></Route>
        <Route path={"/update/:id"} element={<UpdateBook />}></Route>
      </Routes>
    </Provider>
  );
};
export { App };
