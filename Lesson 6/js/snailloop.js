
  var depth = 42;
  //your code goes here
  var w = 0;
  var f = 0;

  for (; f <= depth; w++) {
    f += 7;
    if (f >= depth) {
      break;
    }
    f -= 2;
  }
  console.log(w);
