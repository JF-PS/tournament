const Tournament = require("../models").Tournament;

module.exports = class TournamentsRepository {
  async create(formData) {
    return await new Promise((resolve, reject) => {
      Tournament.create(formData)
        .then((tournament) => {
          resolve(tournament);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
};
