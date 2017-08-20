/*
20. 최단 거리 1차원 점의 쌍 구하기 (DAUM)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/

// 1. n+1번째 인덱스의 값 - n번째 인덱스의 값들 중 최솟값
// 1-1. (n+1의 값)-n의 값 = 변수 dist에 저장 = 배열에 저장. 
// 위의 예 [2,1,4,5,4,3,3,1]
// 1-2. 순회하면서 비교.
// 1-2-1. 둘중 작은값을 다음인자로 넘김.
// 1-2-2. 다음 인자와 넘거진 인자를 또 비교 (같은 경우도 있으니 작거나 같은)
// 1-2-3. 마지막까지 비교 후 작거나 같은 값을 배열에 담는다.
// 2. 배열객체를 배열에 다시 담아서 반환
// 2-1. dist의 가장 작은 값의 인덱스(n)를 알아낸다.
// 2-2. n과 n+1의 인덱스값에 해당되는 first 요소를 배열에 담는다.
// 2-3. 그 배열을 담는 최종 배열을 반환한다.

function findMinDistance(arr){
  var first = [];
  var dist = arr.forEach(function(element, index, array){
    first.push(arr[index+1]-arr[index]);
  });
  first.length = first.length - 1;
  // var diff = first.split('');
  // console.log(first);
  var minNumIndex = [];
  var compare = first.reduce(function(pre,curr,currIndex,array){
    if (curr <= pre){ 
      // 현재 함수와 이전 함수를 비교한다. 현재값이 이전값보다 작으면 담는다. 아니면 이전 값이 다시 다음 순회로 넘어간다..
      // 1. 비교 -> true이면
      // 1-1. curr을 반환
      // 1-2. curr을 반환 할때는 해당 인덱스값을 변수 minNumIndex에 담아놓는다.
      // 2. 비교 -> false이면
      // 2-1. pre를 반환 
      minNumIndex.push(currIndex);
      return curr;
    } else (curr > pre)
      return pre;
    
  });
  var result = [];
  // var resultArr = []; //[1,7]
  minNumIndex.forEach(function(element,index){
    result.push([arr[element],arr[element+1]]);
    // console.log(array[6]);
    // resultArr.concat([[array[element],array[element+1]]]);
  });
  return result;
  // console.log(result);
  // for (var i=0; i<minNumIndex.length;i++){
  //   result.push(array[minNumIndex[i]]);
  //   result.push(array[minNumIndex[i]+1]);
  //   resultArr.push(result);
  // }
  // console.log(result);
  // return resultArr;
}

// 1차원 점의 배열

var array = [1, 3, 5, 8, 13, 14, 20, 23, 30];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]