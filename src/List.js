import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const Li = styled.li`
  list-style: none;
  border: 1px solid papayawhip;
  margin: 1px;
`;
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
        <ul>{this.state.posts.map(post => <Li key={post.id}>{post.title}</Li>)}</ul>
      </div>
    );
  }
}
