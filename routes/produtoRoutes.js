const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let produtos = [
  {
    id: 1,
    nome: "celular",
    descricao: "celular iphone",
    preco: 99999,
    estoque: 1000,
    categoria: "tecnologia"
  },
  {
    id: 2,
    nome: "armario",
    descricao: "para guardar coisas",
    preco: 1500,
    estoque: 199,
    categoria: "movel"
  },
  { 
    id: 3,
    nome: "mause",
    descricao: "mause com fio",
    preco: 35,
    estoque: 190,
    categoria: "Tecnologia"
  }
];

router.get("/", (req, res) => {
  res.render("produtos/index", {
    produtos : produtos
  });
});

router.get("/cadastro", (req, res) => {
  res.render("produtos/form-cadastro")
});

router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;
  const novoProduto = {
    id: produtos.length + 1,
    nome: nome,
    descricao: descricao,
    preco: preco,
    estoque: estoque,
    categoria: categoria
  };
  produtos.push(novoProduto);
  res.redirect('/produtos');
})


// excluir 

router.get("/excluir/:id", (req, res) => {

  let id = parseInt(req.params.id);

  produtos = produtos.filter(c => c.id !== id);

  res.redirect("/produtos");
});

//editar - form - GET
router.get("/editar/:id", (req, res)=> {
  let id = parseInt(req.params.id);
  let produto = produtos.find(c => c.id === id)

  if(!produto){
    return res.redirect("/produtos");
  }

  res.render("produtos/editar", { produto });
});

//editar - efetiva - POST

module.exports = router;
