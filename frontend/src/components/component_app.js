import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css';
import SortNavBar from './main/component_main_sort_nav_bar'
import PostsIndex from './main/component_main_posts_index'
import PostForm from './forms/component_main_post_form'

class App extends Component {
  render() {
    return (
      <div>
        <SortNavBar />
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
