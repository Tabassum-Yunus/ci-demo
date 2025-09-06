// Simple Express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD demo!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
});
