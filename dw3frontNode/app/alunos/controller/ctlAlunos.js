axios = require("axios");

//@ Abre o formulário de manutenção de alunos
const getAllAlunos = (req, res) =>
  (async () => {
    userName = req.session.userName;
    try {
      resp = await axios.get(process.env.SERVIDOR_DW3 + "/getAllAlunos", {});
      //console.log("[ctlLogin.js] Valor resp:", resp.data);
      res.render("alunos/view_manutencao", {
        title: "Manutenção de alunos",
        data: resp.data,
        userName: userName, 
      });
    } catch (erro) {
      console.log("[ctlAlunos.js|getAllAlunos] Try Catch:Erro de requisição");
    }
  })();

//@ Abre o formulário de cadastro de alunos
const insertAlunos = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    try {
      if (req.method == "GET") {
        oper = "c";
        res.render("alunos/view_cadAlunos", {
          title: "Cadastro de alunos",
          data: null,
          oper: oper,
          userName: userName, 
        });
      } else { 
        oper = "c";
        //const alunoREG = req.body;
        console.log("[ctlAlunos|insertAlunos] valor de alunoReg:", req.body);
        res.render("alunos/view_cadAlunos", {
          title: "Cadastro de alunos",
          data: null,
          oper: oper,
          userName: userName,});
      }
    } catch (erro) {
      console.log("[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado");
    }
  })();

module.exports = {
  getAllAlunos,
  //cadAlunos,
  // getAlunoByID,
  insertAlunos,
  // updateAlunos,
  // DeleteAlunos
};
