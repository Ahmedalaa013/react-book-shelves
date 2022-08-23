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
              <img src={book.url} className="card-img-top " alt={book.title} />
              <DropdownButton
                bookTitle={book.title}
                bookAuthor={book.name}
                picUrl={book.url}
                readingList={props.readingList}
              />
            </div>

            <div className="card-body">
              <h6 className="card-title">{book.title}</h6>
              <p className="card-text text-muted">{book.name}</p>
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
