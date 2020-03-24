import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="fas fa-arrow-up"></i>
          <i className="fas fa-arrow-down"></i>
          <span>{this.props.votes}</span>
        </div>
        <div className="Joke-text">{this.props.joke}</div>
      </div>
    );
  }
}

export default Joke;
