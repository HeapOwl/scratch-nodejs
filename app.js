const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname));
//app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3000, () => {
  console.log("server at 3000");
});
