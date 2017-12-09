import { observable } from 'mobx'

class Store {
  @observable
  age: number = 35;
  // age가 변화면 바꿔줄 것이다.

  addAge = () => {
    this.age++;
  }
}

export default new Store()