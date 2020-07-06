import React from "react";
import "./App.css";

class App extends React.Component {
  state = { posts: []}

  async componentDidMount() {
    const response = await fetch('https://frozen-retreat-96403.herokuapp.com/posts');
    const posts = await response.json();
    this.setState({ posts: posts })
  }

  render() {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        <hr/>
        </div>
      )
    })
  }
}

export default App;
