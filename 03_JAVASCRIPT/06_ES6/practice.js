// 1. filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기

/*
function print(){
  const list = document.querySelectorAll('li');
  // console.log(typeof list);
  const listArr = Array.from(list);
  // console.log(listArr[0].innerText);
  const filter = listArr.filter(function(element){
    // console.log(element.innerText);
    return element.innerText.includes('e');
  });
  console.log(filter[0].innerText);
  console.log(filter[1].innerText);
  console.log(filter[2].innerText);

}
print();
*/

/*
let wm = new WeakMap();
let myfun = function(){};
//이 함수가 얼마나 실행됐찌?를 알려고 할 때.

wm.set(myfun, 0);

console.log(wm)

let count = 0;
for(let i=0; i<10; i++){
  count = wm.get(myfun); // get메서드는 key값과 관련된 값이 있는 경우 반환 없는 경우 undefined를 반환
  count++;
  wm.set(fun,count);
}
console.log(wm);
*/

const data = [
  {
    name : 'coffee-bean',
    order : true,
    itmes : ['americano','milk','green-tea']
  },
  {
    name : 'starbucks',
    order : false,
  }
]
function fn(tags, name, items){
  console.log(tags); 
  // ["<div>welcome ", "!!</div><h2>주문가능항목</h2><div>", "</div>", raw: Array(3)]
  if (typeof items === "undefined"){
    items = "주문가능한 상품이 없습니다.";
  }
  return(tags[0] + name + tags[1] + items + tags[2]);
}
const template = fn`<div>welcome ${data[0].name}!!</div><h2>주문가능항목</h2><div>${data[1].items}</div>`; // 앞부분에 function의 이름을 넣어서 function으로 감쌀 수 있다.
// tag를 기준으로 배열에 넣어진다. 
console.log(template);
