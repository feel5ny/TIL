## Set

```js
let mySet = new Set();
console.log(toString.call(mySet)); // 타입체크하는 함수

mySet.add("nayoung");
mySet.add("like853");
mySet.add("nayoung");

if(mySet.has("nayoung"))

mySet.forEach(function(v){
  console.log(v);
})
```

set
- 중복없이 유일한 값을 저장하려고 할 때.
- 이미 존재하는지 체크할 때 유용.

set protytype
- add
- clear
- delete
- entries
- forEach
- has
- keys
- values
- size

## weakset
- 참조를 가지고 있는 객체만 저장이 가능하다.
- 객체형태를 중복없이 저장하려고 할때 유용하다.