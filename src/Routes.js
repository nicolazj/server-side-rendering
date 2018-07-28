import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./Home' /* webpackChunkName: "Home" */),
  loading: ({ isLoading }) => isLoading && <p>loading</p>,
});
const List = Loadable({
  loader: () => import('./List' /* webpackChunkName: "List" */),
  loading: ({ isLoading }) => isLoading && <p>loading</p>,
});

const SLink = styled(Link)`
  color: palevioletred;
  padding: 1em;
`;
const Page = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
class Routes extends Component {
  render() {
    return (
      <Page>
        <nav>
          <SLink to="/"> Home </SLink>
          <SLink to="/list"> List </SLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={List} />
        </Switch>
      </Page>
    );
  }
}

export default Routes;
