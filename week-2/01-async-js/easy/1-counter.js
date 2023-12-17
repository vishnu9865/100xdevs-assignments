let counter = 0;

const timeoutId = setInterval(function () {
  console.log(++counter);
}, 1000);