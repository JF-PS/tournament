const mockTournamentService = require("../mock/TournamentRepository.mock");
jest.mock("../mock/TournamentRepository.mock", () => ({
  getByName: jest.fn(),
  create: jest.fn(),
}));

const tournamentController = require("../controllers/tournaments.controller");
const tournamentBuisness = require("../buisness/tournaments.buisness");
const buisness = tournamentBuisness(mockTournamentService);

afterEach(() => {
  jest.clearAllMocks();
});

describe("Check Tournament Business ", () => {
  test("if create tournament Ok", async () => {
    // Arrange
    mockTournamentService.getByName.mockReturnValue(false);
    mockTournamentService.create.mockReturnValue(true);
    const result = await buisness.create({ nom: "Morgane" });

    // Assert
    expect(result).toBe(true);
  });

  test("if create tournament not Ok", async () => {
    // Arrange
    mockTournamentService.getByName.mockReturnValue(true);
    const result = await buisness.create({ nom: "Morgane" });

    // Assert
    expect(result.message).toBe("This name already exists");
  });
});
