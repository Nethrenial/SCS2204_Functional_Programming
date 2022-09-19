const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.post("/answer", (req, res) => {
  const { val1, val2, op } = req.body;
  let answer = 0;

  switch (op) {
    case "+":
      answer = Number(val1) + Number(val2);
      break;
    case "-":
      answer = Number(val1) - Number(val2);
      break;
    case "*":
      answer = Number(val1) * Number(val2);
      break;
    case "/":
      answer = Number(val1) / Number(val2);
      break;
    default:
      break;
  }

  res.send(`Answer = ${answer}`);
});

app.listen(3000, () => {
  console.log("Server started listening on port 3000\nhttp://localhost:3000");
});
