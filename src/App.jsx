import React from 'react';
import './App.css';

class App extends React.Component {
async componentDidMount() {
  const response = await fetch("http://localhost:3000/posts")
  const posts = await response.json()
console.log(posts)
}

render() {
  return(
    <h1>Hello world app</h1>
  );
}
} 

export default App;
