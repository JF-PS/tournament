module.exports = (buisness) => ({
  async create(req, res) {
    await buisness
      .create(req.body)
      .then((particpant) => {
        res.status(200).send(particpant);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
});
