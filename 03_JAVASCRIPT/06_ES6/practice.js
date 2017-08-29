// filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기

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