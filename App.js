import React, { Component, Fragment } from "react";
import Post from "./components/Post";
import Header from "./components/Header";

class App extends Component {
  state = {
    posts: []
  };

  handlePosts = () => {
    this.setState({
      posts: [
        {
          id: 0,
          author: "Mauricio Blum",
          img: "/img/male.png",
          time: 3,
          content:
            "Vestibulum eu aliquet dolor, et convallis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam ac lacus hendrerit eros commodo faucibus quis accumsan urna. Donec fringilla lectus eget tellus lacinia eleifend. Pellentesque rhoncus consequat enim, ac pellentesque sem egestas ut. Proin lorem ante, posuere in ultricies at, dapibus eget odio. Proin risus ante, pharetra at sodales non, mollis nec ex."
        },
        {
          id: 1,
          author: "Flavia Dias",
          img: "/img/female.png",
          time: 15,
          content: "Nada é tão nosso quanto os nossos sonhos..."
        }
      ]
    });
  };

  componentDidMount() {
    this.handlePosts();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Post data={this.state.posts} />
      </Fragment>
    );
  }
}

export default App;
