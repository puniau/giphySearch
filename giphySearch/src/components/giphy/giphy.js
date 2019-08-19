import React, { Component } from "react";
import GiphySearchForm from "./giphySearchForm";
import GifList from "./gifList";

class Giphy extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      gifs: [],
      fetched: false
    };
  }

  componentDidMount() {
    //  this.handleSubmit();
  }

  //create a child component for this. in componentDidMount() put api call and put setSate() also indise
  //componnetDidMount()
  //loading spinner/
  //success error handler
  /*
  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.onType();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };
  */

  handleSubmit = query => {
    // event.preventDefault();
    let filt = [];
    console.log(query);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=TxQ0HuxZxefFwEF5a0X2ivpuAcX0HkTz&q=${query}&limit=5&offset=0&rating=G&lang=en`
    )
      .then(response => response.json())
      .then(response => {
        filt = Object.entries(response.data);
        this.setState({
          gifs: filt,
          fetched: true
        });
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.gifs);
  };
  /*
  onType = () => {
    var filt = [];
    console.log(this.state.query + "ww");
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=TxQ0HuxZxefFwEF5a0X2ivpuAcX0HkTz&q=${
        this.state.query
      }&limit=5&offset=0&rating=G&lang=en`
    )
      .then(response => response.json())
      .then(data => {
        filt = Object.entries(data.data);
        // console.log(filt);
        this.setState({
          filteredData: filt
        });
      });

    console.log(this.state.filteredData);
  };
  */

  render() {
    return (
      <>
        <p>Search gifs</p>
        <div className="searchForm">
          <GiphySearchForm onSearch={this.handleSubmit} />
          <main>
            {this.state.fetched && <GifList gifs={this.state.gifs} />}
          </main>
        </div>
      </>
    );
  }
}
export default Giphy;
