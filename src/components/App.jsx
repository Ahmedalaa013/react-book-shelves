import React from "react";
import Section from "./Section";
import Button from "./Button";
import SearchModal from "./SearchModal";
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentRead: [], wantToRead: [], read: [] };
    this.currentReadList = [];
    this.wantToReadList = [];
    this.readList = [];
  }

  handelReadingList = (event, title, name, url) => {
    if (event === "Currently Reading") {
      let book = { title, name, url };
      this.currentReadList.push(book);
      const wantToReadFilter = this.Filter(
        this.wantToReadList,
        book.title,
        book.name
      );
      const readFilter = this.Filter(this.readList, book.title, book.name);
      this.wantToReadList = wantToReadFilter;
      this.readList = readFilter;
      this.setState({
        read: this.readList,
        wantToRead: this.wantToReadList,
        currentRead: this.currentReadList,
      });
    }
    if (event === "Want to Read") {
      let book = { title, name, url };
      this.wantToReadList.push(book);
      const currentReadFilter = this.Filter(
        this.currentReadList,
        book.title,
        book.name
      );
      const readFilter = this.Filter(this.readList, book.title, book.name);
      this.currentReadList = currentReadFilter;
      this.readList = readFilter;

      this.setState({
        read: this.readList,
        wantToRead: this.wantToReadList,
        currentRead: this.currentReadList,
      });
    }
    if (event === "Read") {
      let book = { title, name, url };
      this.readList.push(book);
      const currentReadFilter = this.Filter(
        this.currentReadList,
        book.title,
        book.name
      );
      const wantToReadFilter = this.Filter(
        this.wantToReadList,
        book.title,
        book.name
      );
      this.currentReadList = currentReadFilter;
      this.wantToReadList = wantToReadFilter;
      this.setState({
        read: this.readList,
        wantToRead: this.wantToReadList,
        currentRead: this.currentReadList,
      });
    }
    if (event === "None") {
      let book = { title, name, url };
      const currentReadFilter = this.Filter(
        this.currentReadList,
        book.title,
        book.name
      );
      const wantToReadFilter = this.Filter(
        this.wantToReadList,
        book.title,
        book.name
      );
      const readFilter = this.Filter(this.readList, book.title, book.name);
      this.currentReadList = currentReadFilter;
      this.wantToReadList = wantToReadFilter;
      this.readList = readFilter;

      this.setState({
        read: this.readList,
        wantToRead: this.wantToReadList,
        currentRead: this.currentReadList,
      });
    }
  };
  Filter = (array, title, name) => {
    return array.filter((Book) => Book.name !== name || Book.title !== title);
  };
  render() {
    return (
      <div className="container-fluid ">
        <div className="row bg-success">
          <div className="col text-center">
            <header>
              <h1 className="text-white p-1">MyReads</h1>
            </header>
          </div>
        </div>
        <Section
          title="Currently Reading"
          data={this.state.currentRead}
          readingList={this.handelReadingList}
        />
        <Section
          title="Want to Read"
          data={this.state.wantToRead}
          readingList={this.handelReadingList}
        />
        <Section
          title="Read"
          data={this.state.read}
          readingList={this.handelReadingList}
        />
        <Button />
        <SearchModal readingList={this.handelReadingList} />
      </div>
    );
  }
}

export default App;
