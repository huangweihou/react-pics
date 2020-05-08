import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            onChange={this.onInputChange}
            value={this.state.term}
          />
        </form>
        <div>{this.state.term}</div>
      </div>
    );
  }
}

export default SearchBar;
