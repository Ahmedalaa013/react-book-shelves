import React from "react";
import Cards from "./Cards";

class SearchModal extends React.Component {
  state = { searchTerm: "", timeOutId: "", results: [] };

  searchHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
    if (this.state.timeOutId) {
      clearTimeout(this.state.timeOutId);
    }
    const timeId = setTimeout(() => {
      if (this.state.searchTerm) {
        this.search();
      }
    }, 500);
    this.setState({ timeOutId: timeId });
  };

  search = async () => {
    const response = await fetch(
      `http://openlibrary.org/search.json?q=${this.state.searchTerm}`
    );
    const data = await response.json();
    this.setState({ results: data.docs });
  };

  render() {
    return (
      <div
        className="modal "
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header shadow p-3 mb-5 bg-body rounded">
              <button
                type="button"
                className="btn-close me-1"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  this.setState({ searchTerm: "", results: [] });
                }}
              ></button>
              <input
                type="text"
                className="form-control ms-1"
                id="exampleFormControlInput1"
                placeholder="Search by title or author"
                onChange={this.searchHandler}
                value={this.state.searchTerm}
              />
            </div>
            <Cards
              data={this.state.results}
              readingList={this.props.readingList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;
