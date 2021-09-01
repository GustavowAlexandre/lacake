const express = require("express");
const fetch = require("node-fetch");

var app = express();
app.set("view engine", "ejs");

app.set("views", __dirname + "/pages/");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/cadastro", function (req, res) {
  res.render("cadastro");
});

app.post("/cadastro", async function (req, res) {
  const { name, email, password, cpf, date, telefone } = req.body;

  const user = { name, email, password, cpf, dataNascimento: date, telefone };

  console.log(user);

  const response = await fetch("http://localhost:3000/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log(await response.json());
  return res.redirect("/configs");
});

app.get("/configs", function (req, res) {
  res.render("configs");
});

app.post("/configs", async function (req, res) {
  const {
    nomeloja,
    editbio,
    cep,
    uf,
    cidade,
    logradouro,
    bairro,
    numero,
    complemento,
  } = req.body;

  const configs = {
    nomeloja,
    editbio,
    cep,
    uf,
    cidade,
    logradouro,
    bairro,
    numero,
    complemento,
  };

  console.log(configs);

  const response = await fetch("http://localhost:3000/configs", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(configs),
  });
  console.log(await response.json());
  return res.redirect("/index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/contato", function (req, res) {
  res.render("contato");
});

app.get("/index", function (req, res) {
  res.render("index");
});

app.get("/orders", function (req, res) {
  res.render("orders");
});

app.get("/products", function (req, res) {
  res.render("products");
});

app.post("/products", async function (req, res) {
  const { nameproduto, imagem, description, disponibilidade, preco, unidade } =
    req.body;

  const products = {
    nameproduto,
    imagem,
    description,
    disponibilidade,
    preco,
    unidade,
  };

  console.log(products);

  const response = await fetch("http://localhost:3000/products", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(products),
  });
  console.log(await response.json());
  return res.redirect("/index");
});

app.get("/sobre", function (req, res) {
  res.render("sobre");
});

app.listen(3001, function () {
  console.log("Server is running : porta 3001!");
});
