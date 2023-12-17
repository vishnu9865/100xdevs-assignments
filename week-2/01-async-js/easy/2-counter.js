let counter = 0;

function main () {
  setTimeout(function () {
    console.log(++counter);
    main();
  }, 1000);
}

main();