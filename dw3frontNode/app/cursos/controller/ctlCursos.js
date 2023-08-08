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


  //@ Abre e faz operações de CRUD no formulário de cadastro de cursos
const insertCursos = (req, res) =>
  (async () => {
    var oper = "";
    var registro = {};
    var cursos = {};
    userName = req.session.userName;
    token = req.session.token;
    try {
      if (req.method == "GET") {
        oper = "c";
        //console.log("[crlAlunos|insertAlunos] valor de cursos:", cursos.data.registro);
        registro = {
          cursoid: 0,
          codigo: "",
          descricao: "",
          ativo: true,
          deleted: false,
        };

        res.render("alunos/view_cadCursos", {
          title: "Cadastro de cursos",          
          oper: oper,
          userName: userName,
        });
      } else {
        oper = "c";
        const alunoREG = validateForm(req.body);
        resp = await axios.post(
          process.env.SERVIDOR_DW3 + "/insertAlunos",
          {
            alunoid: 0,
            prontuario: alunoREG.prontuario,
            nome: alunoREG.nome,
            endereco: alunoREG.endereco,
            rendafamiliar: alunoREG.rendafamiliar,
            datanascimento: alunoREG.datanascimento,
            cursoid: alunoREG.cursoid,
            deleted: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log("[ctlAlunos|insertAlunos] resp:", resp.data);
        if (resp.data.status == "ok") {
          registro = {
            alunoid: 0,
            prontuario: "",
            nome: "",
            endereco: "",
            rendafamiliar: "0.00",
            datanascimento: "",
            cursoid: 0,
            deleted: false,
          };
        } else {
          registro = alunoREG;
        }
        cursos = await axios.get(
          process.env.SERVIDOR_DW3 + "/GetAllCursos",
          {}
        );
        oper = "c";
        res.render("alunos/view_cadAlunos", {
          title: "Cadastro de alunos",
          data: registro,
          curso: cursos.data.registro,
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


module.exports = {
    getAllCursos,
    //cadAlunos,
    // getAlunoByID,
    //viewAlunos,
    insertCursos,
    // updateAlunos,
    //DeleteAlunos,
  };