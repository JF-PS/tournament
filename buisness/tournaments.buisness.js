module.exports = (repository) => ({
  async create(formData) {
    console.log(formData);
    const currentTournament = await repository.getByName(formData.nom);
    if (currentTournament) return { message: "This name already exists" };
    return repository.create(formData);
  },
});
