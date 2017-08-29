## Destructuring

1. Array

```js
const data = ['feel5ny','like853','claraKim','Nayoungkim'];
const feel5 = data[0];
const identity = data[1];

// 아래는 es6버전. 위와 같은 값이 나온다.
const [feel5, identity] = data;
```

<hr>

2. Object

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
let [, {title, imgurl}] = news; 
console.log(imgurl);
```

<hr>

4. Destructuring 활용 : Event 객체전달
```js
function getNewsList([,{newslist}]){
  console.log(newslist);
}
getNewsList(news);
```

