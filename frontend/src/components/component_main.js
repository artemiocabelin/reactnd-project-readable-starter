import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css';
import MainNavigation from './component_main_navigation'
import MainContent from './component_main_content'
import PostForm from './component_main_post_form'

class App extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <Switch>
          <Route path="/posts/new" component={PostForm} />
          <Route path="/posts/edit/:id" component={PostForm} />
          <Route path="/" component={MainContent} />
        </Switch>
      </div>
    );
  }
}

export default App;
