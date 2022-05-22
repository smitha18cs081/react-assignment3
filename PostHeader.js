import React, { Component } from "react";
import "./css/postheader.scss";

export default class PostHeader extends Component {
  render() {
    return (
      <div className="post-header-container">
        <div className="avatar">
          <img src={this.props.img} alt="avatar" />
        </div>
        <div className="info">
          <h4>{this.props.author}</h4>
          <p>Há {this.props.time} min. atrás</p>
        </div>
      </div>
    );
  }
}
