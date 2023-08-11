const axios = require("axios");

//@ Abre o formulário de manutenção de cursos
const getAllCursos = (req, res) =>
  (async () => {
    userName = req.session.userName;
    try {
      resp = await axios.get(process.env.SERVIDOR_DW3 + "/GetAllCursos", {});
      //console.log("[ctlLogin.js] Valor resp:", resp.data);
      res.render("cursos/view_manutencao", {
        title: "Manutenção de cursos",
        data: resp.data,
        userName: userName,
      });
    } catch (erro) {
      console.log("[ctlCursos.js|getAllCursos] Try Catch:Erro de requisição");
    }
  })();

//@ Abre formulário de cadastro de cursos
const openCursosInsert = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "c";
        res.render("cursos/view_cadCursos", {
          title: "Cadastro de cursos",
          oper: oper,
          userName: userName,
        });
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

//@ Função para validar campos no formulário
function validateForm(regFormPar) {
  if (regFormPar.cursoid == "") {
    regFormPar.cursoid = 0;
  }
  regFormPar.ativo = regFormPar.ativo === "true";
  regFormPar.deleted = regFormPar.deleted === "true";

  return regFormPar;
}

//@ Abre formulário de cadastro de cursos
const openCursosUpdate = (req, res) =>
  (async () => {
    var oper = "";
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "u";
        const id = req.params.id;
        parseInt(id);
        res.render("cursos/view_cadCursos", {
          title: "Cadastro de cursos",
          oper: oper,
          idBusca: id,
          userName: userName,
        });
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();

const getDados = (req, res) =>
  (async () => {
    const idBusca = req.body.idBusca;    
    parseInt(idBusca);
    console.log("[ctlCursos.js|getDados] valor id :", idBusca);
    try {
      resp = await axios.post(
        process.env.SERVIDOR_DW3 + "/GetCursoByID",
        {
          cursoid: idBusca,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (resp.data.status == "ok") {
        res.json({ status: "ok", registro: resp.data.registro[0] });
      }
    } catch (error) { 
      console.log(
        "[ctlCursos.js|getDados] Try Catch: Erro não identificado",
        erro
      );
    }
    
  })();

//@ Realiza inserção de cursos
const insertCursos = (req, res) =>
  (async () => {
    token = req.session.token;
    try {
      if (req.method == "POST") {
        const regPost = validateForm(req.body);
        regPost.cursoid = 0;
        const resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/InsertCursos",
          regPost,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        if (resp.data.status == "ok") {
          res.json({ status: "ok", mensagem: "Curso inserido com sucesso!" });
        } else {
          res.json({ status: "erro", mensagem: "Erro ao inserir curso!" });
        }
      }
    } catch (erro) {
      console.log(
        "[ctlAlunos.js|insertAlunos] Try Catch: Erro não identificado",
        erro
      );
    }
  })();
module.exports = {
  getAllCursos,
  openCursosInsert,
  openCursosUpdate,
  getDados,
  insertCursos,
  // updateAlunos,
  //DeleteAlunos,
};
