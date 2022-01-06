module.exports = (buisness) => ({
  async create(req, res) {
    await buisness
      .create(req.body)
      .then((tournament) => {
        res.status(200).send(tournament);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
});
