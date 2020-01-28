async function a() {
  console.log("async a:::");
  return "a";
}
function b() {
  return new Promise(resolve => {
    console.log("promise b:::");
    resolve("b");
  });
}
console.log(a);
console.log(b);
console.log(a());
console.log(b());
