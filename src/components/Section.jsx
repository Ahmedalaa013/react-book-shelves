import { Link } from "react-router-dom";
import DropdownButton from "./Dropdown";
const Section = (props) => {
  if (props.data) {
    const list = props.data.map((book, index) => {
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
                  state: { bookDetails: book },
                }}
              >
                <img
                  src={book.bookImg}
                  className="card-img-top "
                  alt={book.bookData.title}
                />
              </Link>

              <DropdownButton
                bookData={book.bookData}
                picUrl={book.bookImg}
                readingList={props.readingList}
              />
            </div>

            <div className="card-body">
              <Link
                to={{
                  pathname: "/bookDetails",
                  state: { bookDetails: book },
                }}
                style={{ textDecoration: "none" }}
              >
                <h6 className="card-title text-dark">{book.bookData.title}</h6>
              </Link>

              <p className="card-text text-muted">
                {book.bookData.author_name}
              </p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="row p-1 ">
        <div className="col">
          <h2>{props.title}</h2>
          <hr />
          <div className="g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-6">
            {list}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row p-1 ">
        <div className="col">
          <h2>{props.title}</h2>
          <hr />
        </div>
      </div>
    );
  }
};
export default Section;
