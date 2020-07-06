import React from "react";
import "./App.css";

class App extends React.Component {
  state = { posts: []}

  async componentDidMount() {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();
    this.setState({ posts: posts })
  }

  render() {
    return this.state.posts.map((post, index) => {
      return (
        <div>
          <h1 key={index}>{post.title}</h1>
          <p>{post.body}</p>
        <hr/>
        </div>
      )
    })
  }
}

export default App;
