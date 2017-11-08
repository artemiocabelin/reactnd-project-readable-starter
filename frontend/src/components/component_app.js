import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css';
import SortOrders from './main/component_main_sort_orders'
import PostsIndex from './main/component_main_posts_index'
import PostForm from './main/component_main_post_form'

class App extends Component {
  render() {
    return (
      <div>
        <SortOrders />
        <Switch>
          <Route path="/posts/new" component={PostForm} />
          <Route path="/posts/edit/:id" component={PostForm} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    );
  }
}

export default App;
