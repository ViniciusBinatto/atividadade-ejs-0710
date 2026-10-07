const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let clientes = [
  {
    id: 1,
    nome: "neymar",
    email : "neimajunio@gmail.com",
    tel : "(19) 99999-9999",
  },
  {
    id: 2,
    nome: "cleiton",
    email : "cleiton@gmail.com",
    tel : "(19) 99999-9999",
  },
  {
    id: 3,
    nome: "julio",
    email : "julio@gmial.com",
    tel : "(19) 99999-9999",
  }
];

router.get("/", (req, res) =>{
    res.render("clientes/index", {
        clientes: clientes
    });
});

router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro")
});

router.post("/", (req, res) => {
  const {nome, email, tel, cid} = req.body;
  const novocliente ={
    id: clientes.length + 1,
    nome: nome,
    email : email,
    tel : tel,
  };
  clientes.push(novocliente);
  res.redirect('/clientes');
})

// excluir 

router.get("/excluir/:id", (req, res) => {

  let id = parseInt(req.params.id);

  clientes = clientes.filter(c => c.id !== id);

  res.redirect("/clientes");
});

//editar - form - GET
router.get("/editar/:id", (req, res)=> {
  let id = parseInt(req.params.id);
  let cliente = clientes.find(c => c.id === id)

  if(!cliente){
    return res.redirect("/clientes");
  }

  res.render("clientes/editar", { cliente });
});

//editar - efetiva - POST

module.exports = router;
