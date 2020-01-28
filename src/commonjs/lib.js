console.log("hello nico");

exports.hellow = "world";
exports.add = function(a, b) {
  return a + b;
};
exports.geekbang = { hello: "world" };
setTimeout(() => {
  console.log(exports);
}, 1000);
