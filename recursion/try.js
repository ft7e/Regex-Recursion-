"use strict";

function doit(num) {
  if (num == 3) {
    return 2;
  } else {
    return doit(num - 2) + doit(num - 1);
  }
}
console.log(doit(2));
