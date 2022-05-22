import React, { Component } from "react";
import PostHeader from "./PostHeader";

import "./css/post.scss";

export default class Post extends Component {
  render() {
    return (
      <div className="container">
        {this.props.data.map(post => (
          <div className="post">
            <PostHeader author={post.author} time={post.time} img={post.img} />
            <div className="post-text">
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
