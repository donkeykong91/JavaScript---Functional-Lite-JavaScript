function bar(x, y, z) {
	function foo(x) {
		y++;
		z = x * y;
	}

	return [y, z];
}

bar(20,y,z);
bar(25,y,z);
