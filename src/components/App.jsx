import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReadingLists from "./ReadingLists";
import BookDetails from "./BookDetails";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row bg-success">
            <div className="col text-center">
              <header>
                <h1 className="text-white p-1">My Reads</h1>
              </header>
            </div>
          </div>
          <Route path="/" exact component={ReadingLists} />
          <Route path="/bookDetails" exact component={BookDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
