const glob = require("glob");
var result = null;
/**
 * different betweent sync and async
 */
console.time("glob sync");
result = glob.sync("__dirname" + "/../**/*");
console.log("result:::", result.length);
console.timeEnd("glob sync");
result = null;
console.time("glob async");
glob("__dirname" + "/../**/*", function(err, res) {
  result = res;
  console.log("result:::", result.length);
});
console.timeEnd("glob async");
