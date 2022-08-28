const DropdownButton = (props) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        data-bs-toggle="dropdown"
        data-bs-target={props.target}
        aria-expanded="false"
        id="dropdownMenu2"
        className="btn btn-success rounded-circle position-absolute bottom-0 end-0"
        style={{ width: "40px", height: "40px" }}
      >
        <i className="bi bi-caret-down-fill" style={{ fontSize: "13px" }}></i>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <li className="text-muted ms-3"> Move to..</li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={(event) => {
              props.readingList(
                event.target.textContent,
                props.bookData,
                props.picUrl
              );
            }}
          >
            Currently Reading
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={(event) => {
              props.readingList(
                event.target.textContent,
                props.bookData,
                props.picUrl
              );
            }}
          >
            Want to Read
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={(event) => {
              props.readingList(
                event.target.textContent,
                props.bookData,
                props.picUrl
              );
            }}
          >
            Read
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={(event) => {
              props.readingList(
                event.target.textContent,
                props.bookData,
                props.picUrl
              );
            }}
          >
            None
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
