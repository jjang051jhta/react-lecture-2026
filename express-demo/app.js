const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/hello", (req, res) => {
  res.send("hello jjang051");
});

app.listen(3000, () => {
  console.log("서버실행중....");
  console.log("http://localhost:3000");
});
