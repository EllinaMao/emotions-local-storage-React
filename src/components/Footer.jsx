import React, { Component } from "react";
import "../App.css";
 
class Footer extends Component {
  render() {
    const { emotions } = this.props;
    const lastEmotion =
      emotions.length > 0 ? emotions[emotions.length - 1].name : "no";
 
    return (
      <footer className="footer">
        <p>Total entries: {emotions.length}</p>
        <p>Last emotion: {lastEmotion}</p>
      </footer>
    );
  }
}
 
export default Footer;
