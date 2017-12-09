import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { TodoStore } from './stores/todoStore';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

interface AppProps {
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class App extends React.Component<AppProps, {}> {
  render() {
    const store = this.props.todoStore as TodoStore;
    return (
      <div>
        <TodoInput addTodo={store.addTodo} />
        <TodoList todos={store.todos} />
      </div>
    );
  }
}

export default App;
