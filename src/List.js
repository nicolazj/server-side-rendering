import React, { Component } from 'react';
import axios from 'axios';
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => this.setState({ posts: res.data }));
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        This is List
        <ul>{this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      </div>
    );
  }
}
