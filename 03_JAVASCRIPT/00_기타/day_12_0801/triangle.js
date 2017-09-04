// function sum(){
//   var res = 0;

//   for (var i=0; i<arguments.length; i++){
//     res += arguments[i]; //배열의 각 인자를 받아서 더해줄려고 한다.
//   }
//   return res;
// }

// console.log(sum());
// console.log(sum(1,2));
// console.log(sum(1,2,3));


// function changeVal(primitive, obj) {
//   primitive += 100;
//   obj.name = "Kim";
//   obj.gender = "female";
//   return
// }

// var num = 100;
// var obj = {
//   name: "Lee",
//   gender: "male"
// };

// console.log(num); // 100
// console.log(obj); // Object {name: ‘Lee’, gender: ‘male’}

// changeVal(num, obj);

// console.log(num); // 100
// console.log(obj);

var foo = function() {
  var a = 3, b=5;
  var bar = function(){
    var b = 7, c = 11;
    a+=b+c;
  };
  bar();
};  