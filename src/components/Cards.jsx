import DropdownButton from "./Dropdown";

const Cards = (props) => {
  let imgurl = "";

  const list = props.data.map((book, index) => {
    imgurl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    return (
      <div className="col" key={index}>
        <div
          className="card h-100 border-0 position-relative"
          style={{ width: "11rem" }}
        >
          <div className="position-relative">
            <img src={imgurl} className="card-img-top " alt={book.title} />
            <DropdownButton
              bookTitle={book.title}
              bookAuthor={book.author_name}
              picUrl={imgurl}
              readingList={props.readingList}
            />
          </div>

          <div className="card-body">
            <h6 className="card-title">{book.title}</h6>
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
