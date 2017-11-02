import React, { Component } from 'react';
import '../styles/App.css';
import MainNavigation from './component_main_navigation'
import MainContent from './component_main_content'

class App extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
