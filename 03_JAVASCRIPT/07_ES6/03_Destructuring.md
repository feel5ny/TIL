## Destructuring
디스트럭처링은 기존에 구조로 가지고 있던 객체(배열 또는 객체)를 분석하여 개별적인 변수에 할당하는 것이다. 배열 또는 객체 리터럴에서 `필요한 값만을 추출하여 변수에 할당하거나 반활할 때 유용`하다.

1. Array

- 상황 : 데이터의 어떤 값들이 배열에 있는 상황
- 변수에 배열을 할당할 때 유용하게 사용할 수 있다.
- 배열 디스트럭처링을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수 리스트가 필요하다. 
- 중첩도 가능하다.

```js
const data = ['feel5ny','like853','claraKim','Nayoungkim'];
const feel5 = data[0];
const identity = data[1];

// 아래는 es6버전. 위와 같은 값이 나온다.
const [feel5, identity] = data;
// 변수에 배열을 할당할 때 유용하게 사용할 수 있다.
```

<hr>

2. Object
- 상황 : value와 key값이 있는 상황
- 

```js
let obj = {
  name : 'nayoung';
  address : "Korea";
  age : 20
}

let {name, age} = obj;

let {name:myName, age:myAge} = obj;
console.log(myName, myAge);
```

<hr>

3. Destructuring 활용 JSON 파싱

```js
var news = [
  {
    "title" : "sbs",
    "imgurl" : "https://cdn-images-1.medium.com/max/1600/1*Zo4-zdsM1hZb966PaqUDng.png"
    "newslist" :[
      "Framer, Flinto, Origami, Invision. 많은 프로토타이핑 도구가 존재합니다.",
      "디자인에 활력을 불어넣고 개발팀과의 커뮤니케이션을 위해 필수라고 하는 프로토타이핑.", 
      "어떻게 하기는 해야겠는 데 어려운 도구나 코드르 공부하기엔 시간이 없고, 막상 열심히 공부하면 새로운 버전이 나오고, 더 좋은 도구가 나오고." 
    ]
  },
  {
    "title" : "mbc",
    "imgurl" : "https://cdn-images-1.medium.com/letterbox/72/72/50/50/1*L5vNy_5TaQMViNZMfCrRMg.png?source=logoAvatar-2b47979c69bf---64f31fabca5a"
    "newslist" :[
       "프로토타이핑 도구로 멋지고 완결된 시나리오를 가진 결과물을 만들 수도 있습니다.", 
       "하지만 우리에게 당장 필요한 것은 지금 당장 떠오르는 아이디어를 보여줄 수 있는 아이콘의 간단한 모션, 쓱 움직이는 화면 전환 같은 것이 아닐까요?", 
       "오늘 배워서 바로 쓸 수 있는 CSS animation으로 하는 간단한 프로토타이핑 방법을 소개합니다."
    ]
  }
];

/*
let [,mbc]= news; // 두번째 인덱스이기 때문에. 객체로부터 추출하여 변수 리스트에 할당한다.
let {title, imgurl} = mbc;
console.log(title, imgurl);
*/
let [, {title, imgurl}] = news; // 두번째 인덱스인 mbc의 title과 imgurl을 news에 담았다.
console.log(imgurl);
```

<hr>

4. Destructuring 활용 : Event 객체전달
- 매개변수로도 디스트럭처링하여 전달이 가능하다.

```js
// 두번째 mbc의 newslist를 가져올 수 있다.
// 매개변수로도 전달이 가능하다.
function getNewsList([,{newslist}]){
  console.log(newslist);
}
getNewsList(news);
```

```js
document.querySelector("div").addEventListener("click", function(e){
  console.log(e.target); // cf_이벤트 객체이는 target 메소드가 존재한다.
})
// ** 이벤트 객체 내부에 있는 요소들을 중에 target이 있는 것이므로, 디스트럭처링을 하여 보다 깔끔하게 전달할 수 있다.
document.querySelector("div").addEventListener("click", function({target}){
  console.log(target); 
  console.log(target.name);  // target의 tagname만 뽑겠다.
})
```

