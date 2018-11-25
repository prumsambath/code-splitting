import React, { Component } from 'react';
import './App.css';
import Page1 from './Page1';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null,
    };
  }

  onRouteChange = route => {
    if (route === 'page1') {
      this.setState({ route });
    } else if (route === 'page2') {
      import('./Page2').then(Page2 => {
        this.setState({ route, component: Page2.default });
      });
    } else if (route === 'page3') {
      import('./Page3').then(Page3 => {
        this.setState({ route, component: Page3.default });
      });
    }
  };

  render() {
    let { route } = this.state;
    if (route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
