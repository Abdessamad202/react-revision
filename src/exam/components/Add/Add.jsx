import { Link } from "react-router";
import './add.css'
const Add = () => {
  return (
    <Link to={"/add"}>
      <button type="button" className="add-button">
        add book
      </button>
    </Link>
  );
};
export { Add };
