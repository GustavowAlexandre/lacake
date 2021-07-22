const express = require('express')
var app = express();
app.set('view engine', 'ejs');


app.set("views", __dirname + "/pages/");

app.use(express.static("public"));


app.get('/cadastro', function (req, res) {
  res.render("cadastro");
})

app.get('/configs', function (req, res) {
  res.render("configs");
})

app.get('/login', function (req, res) {
  res.render("login");
})

app.get('/contato', function (req, res) {
  res.render("contato");
})

app.get('/index', function (req, res) {
  res.render("index");
})

app.get('/orders', function (req, res) {
  res.render("orders");
})

app.get('/products', function (req, res) {
  res.render("products");
})

app.get('/sobre', function (req, res) {
  res.render("sobre");
})





app.listen(3000, function () {
  console.log('Server is running : porta 3000!');
});