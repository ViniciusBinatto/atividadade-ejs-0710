const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let fornecedores = [
  {
    id: 1,
    razao: "tecnologia",
    cnpj: "19939383895",
    email: "tecnologya@gmail.com.com",
    tel : "(19) 99999-9999",
    cid : "São Paulo - SP"
  },
  {
    id: 2,
    razao: "salgadinho",
    cnpj: "1239765444445",
    email: "fadangs@gmail.com.com",
    tel : "(11) 99999-9999",
    cid : "itu - SP"
  },
  {
    id: 3,
    razao: "coca-cola",
    cnpj: "09876578970195",
    email: "cocacola@gmail.com.com",
    tel : "(19) 99999-9999",
    cid : "brasilia - DF"
  },
];

router.get("/", (req, res) =>{
    res.render("fornecedor/index", {
        fornecedores: fornecedores
    });
});

router.get("/cadastro", (req, res) => {
  res.render("fornecedor/form-cadastro")
});

router.post("/", (req, res) => {
  const {razao, cnpj, email, tel, cid} = req.body;
  const novoFornecedor ={
    id: fornecedores.length + 1,
    razao : razao,
    cnpj : cnpj,
    email : email,
    tel : tel,
    cid : cid
  };
  fornecedores.push(novoFornecedor);
  res.redirect('/fornecedores');
})

// excluir 

router.get("/excluir/:id", (req, res) => {

  let id = parseInt(req.params.id);

  fornecedores = fornecedores.filter(c => c.id !== id);

  res.redirect("/fornecedores");
});

//editar - form - GET
router.get("/editar/:id", (req, res)=> {
  let id = parseInt(req.params.id);
  let fornecedor = fornecedores.find(c => c.id === id)

  if(!fornecedor){
    return res.redirect("/fornecedores");
  }

  res.render("fornecedor/editar", { fornecedor });
});

//editar - efetiva - POST

module.exports = router;
