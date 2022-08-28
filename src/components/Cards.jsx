import { Link } from "react-router-dom";
import DropdownButton from "./Dropdown";

const Cards = (props) => {
  let imgurl = "";
  let bookDetails = {};

  const list = props.data.map((book, index) => {
    imgurl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    bookDetails = { bookData: book, bookImg: imgurl };
    return (
      <div className="col" key={index}>
        <div
          className="card h-100 border-0 position-relative"
          style={{ width: "11rem" }}
        >
          <div className="position-relative">
            <Link
              to={{
                pathname: "/bookDetails",
                state: { bookDetails },
              }}
            >
              <img
                src={imgurl}
                className="card-img-top "
                data-bs-dismiss="modal"
                alt={book.title}
              />
            </Link>
            <DropdownButton
              bookData={book}
              picUrl={imgurl}
              readingList={props.readingList}
            />
          </div>

          <div className="card-body">
            <Link
              to={{
                pathname: "/bookDetails",
                state: { bookDetails },
              }}
              style={{ textDecoration: "none" }}
            >
              <h6 className="card-title text-dark" data-bs-dismiss="modal">
                {book.title}
              </h6>
            </Link>
            <p className="card-text text-muted">{book.author_name}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="modal-body g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-6">
      {list}
    </div>
  );
};

export default Cards;
