// 섹션별 코드 정리



// 1. Destructuring 활용 JSON 파싱 _ 실습
const news = [
  {
    "title" : "sbs",
    "imgurl" : "https://cdn-images-1.medium.com/max/1600/1*Zo4-zdsM1hZb966PaqUDng.png",
    "newslist" :[
      "Framer, Flinto, Origami, Invision. 많은 프로토타이핑 도구가 존재합니다.",
      "디자인에 활력을 불어넣고 개발팀과의 커뮤니케이션을 위해 필수라고 하는 프로토타이핑.", 
      "어떻게 하기는 해야겠는 데 어려운 도구나 코드르 공부하기엔 시간이 없고, 막상 열심히 공부하면 새로운 버전이 나오고, 더 좋은 도구가 나오고." 
    ]
  },
  {
    "title" : "mbc",
    "imgurl" : "https://cdn-images-1.medium.com/letterbox/72/72/50/50/1*L5vNy_5TaQMViNZMfCrRMg.png?source=logoAvatar-2b47979c69bf---64f31fabca5a",
    "newslist" :[
       "프로토타이핑 도구로 멋지고 완결된 시나리오를 가진 결과물을 만들 수도 있습니다.", 
       "하지만 우리에게 당장 필요한 것은 지금 당장 떠오르는 아이디어를 보여줄 수 있는 아이콘의 간단한 모션, 쓱 움직이는 화면 전환 같은 것이 아닐까요?", 
       "오늘 배워서 바로 쓸 수 있는 CSS animation으로 하는 간단한 프로토타이핑 방법을 소개합니다."
    ]
  }
];


let [,mbc]= news; // 두번째 인덱스이기 때문에.
let {title, imgurl} = mbc;

// 위 코드를 더 간추리면 아래와 같이 한줄로 작성가능
let [, {title, imgurl}] = news;
console.log(imgurl);



/* 
 * 2. Destructuring 활용_Event객체전달
 */

document.querySelector("div").addEventListener("click",function(evt){
  console.log(evt.target);
})

document.querySelector("div").addEventListener("click",function({target}){
  console.log(target.innerText);
})


/* 
 * 3. Set과 WeakSet 자료구조
 */
let mySet = new Set();
console.log(toString.call(mySet)); // 타입체크하는 함수

// Set에서 사용가능한 prototype들
mySet.add("nayoung");
mySet.add("like853");
mySet.add("nayoung");

console.log(mySet.has("nayoung"));  // 불린값으로 반환
mySet.clear();                      // 전체삭제 
mySet.delete("nayoung");            // 매개변수만 삭제 
var a = mySet.entries();            // a로 확장됨.
mySet.size;                         // 전체 갯수를 반환함.
mySet.values;                       // 전체 갯수를 반환함.
mySet.forEach(function(v){
  console.log(v);
})

// WeakSet
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;
// ws.add(111); // 기본자료형
// ws.add("111");
// ws.add(null);
// 참조를 모니터링 한다고 생각하면 된다.

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));
// false, true
// arr이 null이 된 순간부터, 참조가 사라지는데, 출력값에서는 알 수 없으니, WeakSet을 사용하여 불린값으로 판별한다.


