var color = 'red';

switch (color) {
  case 'yellow' :
    console.log('yellow color');
    break;
  case 'red':
    console.log('red color');
    break;
  case 'blue':
    console.log('blue color');
    break;
  default:
    console.log('unknown color');
}

for(var i=0; i<3; i++){
  for(var j=0; j<i; j++){
    console.log(i,j);
  }
}

for(var i=0; i<10; i++){
  if (i%2==0){
    console.log(i);
  }
}

var j = "";
for(var i=0; i<10; i++){
  if (i%2==0){
    j = i + j; //i+j일 경우 기존 값이 새로운 값의 뒤에 붙기 때문에 // j += i
  }
}
console.log(j);

for(var i=9; i>=0; i--){
  if(i%2==1){
    console.log(i);
  }
}

var a = 0;
while (a < 10) {
  if (a%2==0){
    console.log(a);
  }
  a++;
}

var b = 10;
while(b>0){
  if(b%2==1){
    console.log(b);
  }
  b--;
}

삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.


var z = '';
for (var i = 0; i < 5; i++){
  for(var j = 0; j <= i; j++){ 
   z = z+'*';
  }
  z = z+'\n';
}
console.log(z);

var z = '';
for (var a = 0; a < 2; a++){
  for (var i = 0; i < a*2+3 ; i++){
    for(var j = 0; j <= i; j++){ 
    z = z+'*';
    }
    z = z+'\n';
  }
}
console.log(z);
