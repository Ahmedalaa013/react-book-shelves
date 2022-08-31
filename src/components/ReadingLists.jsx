import React from "react";
import Section from "./Section";
import Button from "./Button";
import SearchModal from "./SearchModal";

class ReadingLists extends React.Component {
  constructor() {
    super();
    this.state = { currentRead: [], wantToRead: [], read: [] };
    this.currentReadList = [];
    this.wantToReadList = [];
    this.readList = [];
  }
  componentDidMount = () => {
    let currentlyListStorage = JSON.parse(
      localStorage.getItem("currentlyReading")
    );
    let wantToListStorage = JSON.parse(localStorage.getItem("WantToRead"));
    let readListStorage = JSON.parse(localStorage.getItem("Read"));

    currentlyListStorage
      ? (this.currentReadList = currentlyListStorage)
      : (currentlyListStorage = []);
    wantToListStorage
      ? (this.wantToListStorage = wantToListStorage)
      : (wantToListStorage = []);
    readListStorage
      ? (this.readListStorage = readListStorage)
      : (readListStorage = []);
    this.currentReadList = currentlyListStorage;
    this.wantToReadList = wantToListStorage;
    this.readList = readListStorage;

    this.setState({
      currentRead: currentlyListStorage,
      wantToRead: wantToListStorage,
      read: readListStorage,
    });
  };

  setLocalStorage = (listType, data) => {
    if (listType === "Currently Reading") {
      localStorage.setItem("currentlyReading", JSON.stringify(data));
    }
    if (listType === "Want to Read") {
      localStorage.setItem("WantToRead", JSON.stringify(data));
    }
    if (listType === "Read") {
      localStorage.setItem("Read", JSON.stringify(data));
    }
  };

  handelReadingList = (event, bookData, bookImg) => {
    let book = { bookData, bookImg };
    this.filterBooks(bookData.title, bookData.author_name);

    if (event === "Currently Reading") {
      this.currentReadList.push(book);
      this.setState({
        currentRead: this.currentReadList,
      });
      this.setLocalStorage("Currently Reading", this.currentReadList);
    }
    if (event === "Want to Read") {
      this.wantToReadList.push(book);
      this.setState({
        wantToRead: this.wantToReadList,
      });
      this.setLocalStorage("Want to Read", this.wantToReadList);
    }
    if (event === "Read") {
      this.readList.push(book);
      this.setState({
        read: this.readList,
      });
      this.setLocalStorage("Read", this.readList);
    }
    if (event === "None") {
      this.filterBooks(bookData.title, bookData.author_name);
    }
  };

  filterBooks = (title, author) => {
    let currentRead = this.currentReadList.filter(
      (Book) =>
        Book.bookData.author_name !== author || Book.bookData.title !== title
    );
    let wantToRead = this.wantToReadList.filter(
      (Book) =>
        Book.bookData.author_name !== author || Book.bookData.title !== title
    );
    let read = this.readList.filter(
      (Book) =>
        Book.bookData.author_name !== author || Book.bookData.title !== title
    );

    this.currentReadList = currentRead;
    this.wantToReadList = wantToRead;
    this.readList = read;

    localStorage.setItem(
      "currentlyReading",
      JSON.stringify(this.currentReadList)
    );
    localStorage.setItem("WantToRead", JSON.stringify(this.wantToReadList));
    localStorage.setItem("Read", JSON.stringify(this.readList));

    this.setState({
      read: this.readList,
      wantToRead: this.wantToReadList,
      currentRead: this.currentReadList,
    });
  };

  render() {
    return (
      <>
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
        <Button toggle="modal" target="#searchModal" icon="bi bi-plus-lg" />
        <SearchModal readingList={this.handelReadingList} />
      </>
    );
  }
}

export default ReadingLists;
