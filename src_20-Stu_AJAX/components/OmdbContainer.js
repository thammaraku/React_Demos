import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // query the OMDB API Then update this component's `result` state with the result of the AJAX request
  searchMovies = query => {
    API.search(query)
      .then(res => {
        console.log(res);
        this.setState({ result: res.data })})
      .catch(err => console.log(err));
  };

  //method which should utilize the `API.js` module to query the OMDB API
  // componentDidMount() {
  //   this.searchMovies(this.state.search);
  // };


  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state name here is "search" defined under searchForm.js which has to match under state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  }


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
