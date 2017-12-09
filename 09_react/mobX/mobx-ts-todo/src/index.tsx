import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'mobx-react';
import todoStore from './stores/todoStore';

ReactDOM.render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
