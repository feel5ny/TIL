## Template

1. json으로 응답을 받고,
2. javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가.
   - dom 추가가 UI개발에서 어렵고, 빈번한 일이다.
   - 결국, `데이터 + HTML문자열의 결합이 필요하기 때문에.`
   - 현업에서는 underscore, handlebar 등등의 라이브러리를 많이 사용하고 있다. 
   - es6에서는 이를 포함하고 있다.
3. 일반적인 문자열에서 줄바꿈은 허용되지 않으며 공백을 표현하기 위해서는 `\`로 시작하는 이스케이프 시퀀스를 사용해야한다.

### String interpolation(문자열 삽입)
`${expression}` : 탬플릿 대입문(template substitution)
- 문자열 뿐만아니라 javascript 표현식을 사용할 수 있다. 

```js
str = 
      `<tr class="row-${id}">
        <td class="collapsing">${id}</td> 
        <td colspan="2">${title}</td>
        <td colspan="2">${author}</td>
        <td colspan="2">${price}</td>
      </tr>`
```

## Tagged Template literals
- template literal 앞에 `fn`을 사용할 경우 함수화 할수 있다.
- 함수화 한 후 인자에서 `tags`과 `객체의 프로퍼티`를 넘길 수 있는데,
  - `tags`를 넘길 경우 탬플릿 대입문 을 기준으로 문자열이 쪼개지면서 배열화된다.

```js
const data = [
  {
    name : 'coffee',
    order : true,
    items : ['americano', 'milk', 'green-tea']
  },
  {
    name : 'starbucks',
    order : false,
  }
]

// Tagged template literals
function fn(tags, name, items) {
  if(typeof items === "undefined"){
    items = "주문가능한 상품이 없습니다."
  }
  return (tags[0] + name + tags[i] + items + tags[2])
}

data.forEach((v) => {
  let template = fn`<div>welcome ${v.name} !!<div> <h2>주문가능항목</h2><div>${v.items}</div>`
  console.log(template)
})
```