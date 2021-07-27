const clienteRestApi = (app, recurso) => {

  app.get(recurso, (req, res) => {
    res.send(`Requisição do tipo GET. ${recurso}`);
  });

  app.post(recurso, (req, res) => {
    res.send(`Requisição do tipo POST. ${recurso}`);
  });

  app.put(recurso, (req, res) => {
    res.send(`Requisição do tipo PUT. ${recurso}`);
  });

  app.delete(recurso, (req, res) => {
    res.send(`Requisição do tipo DELETE. ${recurso}`);
  });
};

module.exports = clienteRestApi;
