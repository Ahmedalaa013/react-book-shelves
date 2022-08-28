import { useLocation, Link } from "react-router-dom";
import Button from "./Button";

const BookDetails = () => {
  const location = useLocation();
  const { bookDetails } = location.state;
  const imgUrl = bookDetails.bookImg.replace("-M", "-L");
  return (
    <div className="row">
      <div className="col mt-5 d-flex justify-content-center">
        <img src={imgUrl} alt={bookDetails.bookData.title} />
        <div className="ms-3">
          <h2>{bookDetails.bookData.title}</h2>
          <p className="text-muted">{`${bookDetails.bookData.author_name[0]} | ${bookDetails.bookData.publisher}`}</p>
          <p className="text-muted">{bookDetails.bookData.publish_date[0]}</p>
        </div>
      </div>
      <Link
        to={{
          pathname: "/",
        }}
      >
        <Button icon="bi bi-arrow-left" />
      </Link>
    </div>
  );
};

export default BookDetails;
