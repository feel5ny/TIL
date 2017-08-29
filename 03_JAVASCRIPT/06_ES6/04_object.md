## key값과 value값의 문자열이 같으면 하나만 명시해도된다.

```js
const name = "nayoung";
const age = 27;
const obj = {
  name : name;
  age : age;
}
console.log(obj);

function getObj(){
  const name = "nayoung";
  const getName = function(){
    return name;
  }
  const setName = function(newname){
    name = newname;
  }
  const printName = function(){
    console.log(name);
  }
  return {getName, setName}
  // key값과 value값이 같으면 위처럼 명시해도 된다. 
  /*{
    getName : getName,
    setName : setName
  }*/
}

var obj = getObj();
console.log(obj);
```