module.exports = () => {
  const mongoose = require("mongoose");
  mongoose.connect(
    "mongodb://catii:gqgq******@127.0.0.1:27017/tao?authSource=admin",
    // "mongodb://127.0.0.1:27017/grjl?authSource=admin",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  // 为这次连接绑定事件
  const db = mongoose.connection;
  db.once("error", () => console.log("Mongo connection error"));
  db.once("open", () => console.log("Mongo connection successed"));
};
