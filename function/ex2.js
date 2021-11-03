function foo(x =1, y=2) {
    console.log("x=" + x + ", y=" + y);

    let result = x+y;
  

    console.log("result=" + result);
}

foo(100, 200);
foo(500);
foo();