// module 观察者模式--解决两个对象之间的通信  封装程序，提高可维护性
const EventEmitter = require("events").EventEmitter;

class GeekTime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit("newLesson", { price: Math.random() * 100 });
    }, 3000);
  }
}
module.exports = new GeekTime();
