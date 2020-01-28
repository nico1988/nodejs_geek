const gt1 = require("./lib.js");
gt1.addListener("newLesson", res => {
  if (res < 80) {
    console.log("res::: lessson less than 80 ,", res);
  }
  console.log("res:::", res);
});
