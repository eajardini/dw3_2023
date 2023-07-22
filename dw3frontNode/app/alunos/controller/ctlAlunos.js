axios = require("axios");

const getAllAlunos = (req, res) =>
  (async () => {
    try {
      resp = await axios.get(process.env.SERVIDOR_DW3 + "/getAllAlunos", {
      });
      //console.log("[ctlLogin.js] Valor resp:", resp.data);
      res.render("alunos/view_manutencao", { title: "Manutenção de alunos", data: resp.data, });
    } catch (erro) {
      console.log("[ctlAlunos.js|getAllAlunos] Try Catch:Erro de requisição");
    }
  })();



module.exports = {
    getAllAlunos,
    // getAlunoByID,
    // insertAlunos,
    // updateAlunos,
    // DeleteAlunos
  };