const game = require("./game.js");
var winCount = 0;
// 获取进程的标准输入
process.stdin.on("data", buffer => {
  console.log("buffer-string:::", buffer.toString().trim());
  const action = buffer.toString().trim();
  const result = game(action);
  if (result == 1) {
    winCount++;
    if (winCount == 3) {
      console.log("winCount>3:::why are you so good??? i'm out");
      process.exit(0);
    }
  }
});
