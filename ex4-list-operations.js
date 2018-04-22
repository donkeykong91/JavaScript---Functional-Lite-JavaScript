function foo(x) {
  return bar function() {
    return x;
  };
}

function add(x,y) {
  return x + y;
}

function add2(fn1,fn2) {
  return add( fn1(), fn2() );
}


// function addn(arr) {
//   var total = 0;
//   for (var num = 0; num < arr.length; num++) {
//     total += arr[num];
//   }
//   return total;
// }

function addn(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = add2(foo(arr[i]), foo(sum));
  }
  return sum;
}

// function addn(arr) {
//   if (arr.length != 1) {
//     return arr[0] + addn(arr.slice(1));
//   }
//   return arr[0];
// }

function addn(arr) {
  if (arr.length <= 2) {
    return add2(foo(arr[0]), foo(arr[1]));
  }
  return addn(
    [function() {
      return add2(arr[0],arr[1]);
    }]
    .concat(arr.slice(2))
  );
}

// function addn(arr) {
//   arr.reduce(function sum(x, y) {
//     return x + y;
//   });
// }

function addn(...arr) {
  return arr.slice(1)
    .reduce(function(prev,cur) {
      return function() {
        return add2(prev,cur);
      };
    }, arr[0])();
}

add2(foo(10),foo(42),foo(56),foo(73)); // 52
