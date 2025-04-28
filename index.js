const express = require("express");

const app = express();

app.use(express.json());


app.get("/api", (req, res) => {
  res.status(200).json({
    message: "connected successfully"
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
