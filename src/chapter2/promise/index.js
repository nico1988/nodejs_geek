(function() {
  var p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
      // resolve();
      reject(new Error("this is promise error"));
    }, 500);
  });
  console.log(p1);
  setTimeout(() => {
    console.log(p1);
  }, 800);
})();
