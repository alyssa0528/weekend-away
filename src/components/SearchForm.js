import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    city: ''
  }

  inputHandler = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  submitFormHandler = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submitFormHandler(event)}>
          Enter city: <input type="text" onChange={(event) => this.inputHandler(event)}></input>
          <button type="submit">Search!</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
