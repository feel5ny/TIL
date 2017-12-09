import * as React from 'react';
import './App.css';
import { observer } from 'mobx-react'

import store from './store'

const logo = require('./logo.svg');

@observer
class App extends React.Component<{}, {}> {
  componentWillReact() {
    console.log('componentWillReact')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {store.age}
          <button onClick={() => store.addAge()}>한 해가 지나갔다.</button>
        </p>
      </div>
    );
  }
}

export default App;
