import { observable, action } from 'mobx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD4Ywl6RRaFrSy8ZXL10hsSl6orA2PF5hc',
  authDomain: 'mobx-ts-todo.firebaseapp.com',
  databaseURL: 'https://mobx-ts-todo.firebaseio.com',
  projectId: 'mobx-ts-todo',
  storageBucket: 'mobx-ts-todo.appspot.com',
  messagingSenderId: '900175359555'
};
firebase.initializeApp(config);
const db: firebase.database.Database = firebase.database();

export class TodoStore {
  @observable
  public todos: { id: string; text: string; }[] = [];

  constructor() {
    const ref = db.ref();
    ref.child('todos').on('value', action((snapshot: firebase.database.DataSnapshot) => {
      if (snapshot) {
        const list = snapshot.val();
        const todos = [];
        if (list !== null) {
          for (const key of Object.keys(list)) {
            todos.push({
              id: key,
              text: list[key]
            });
          }
        }
        this.todos = todos;
      }
    }));
  }
  @action
  public addTodo = (text: string): void => {
    const ref = db.ref();
    ref.child('todos').push().set(text);
  }
}

export default new TodoStore();