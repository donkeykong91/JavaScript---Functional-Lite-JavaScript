function foo(y, z) {
  return function add () {
    return y + z;
  }
}

var x = foo(3,4);

x();	// 7
x();	// 7
