const express = require("express");
const data = require("./data");
const app = express();
const PORT = 8000;

app.get("/api/products", (req, res) => {
  return res.status(200).json(data);
  // return res.json(products); we can display the data like this
});

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
