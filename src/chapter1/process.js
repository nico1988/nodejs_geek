// https://nodejs.org/api/process.html
// Process Events
process.on("beforeExit", code => {
  console.log("Process beforeExit event with code: ", code);
});
process.on("exit", code => {
  console.log("Process exit event with code: ", code);
});
process.on("exit", code => {
  setTimeout(() => {
    console.log("This will not run");
  }, 0);
});
console.log("process.version:::", process.version);
console.log("process.versions:::", process.versions);
console.log("process.pid:::", process.pid);
console.log("process.piatform:::", process.piatform);
console.log("process.arch:::", process.arch);
// print process.argv
process.argv.forEach((val, index) => {
  console.log("process.argv:::", `${index}: ${val}`);
});
// process.cpuUsage
const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log("process.cpuUsage:::", process.cpuUsage(startUsage));
// process.cwd()
console.log(`Current directory: ${process.cwd()}`);

// { user: 514883, system: 11226 }
// process.abort();

// process.stdin.on("data", buffer => {
//   console.log("buffer:::", buffer);
// });
