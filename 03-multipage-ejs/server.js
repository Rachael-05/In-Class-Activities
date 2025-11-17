const express = require("express");
const app = express();

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});

const PORT = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Sever is running on port ${PORT}");
});
