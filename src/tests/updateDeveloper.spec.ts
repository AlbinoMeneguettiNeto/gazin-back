import UpdateDeveloper from "@api/developers/services/updateDeveloper";
import DeveloperModel from "@models/developers";
import IDevelopers from "@api/developers/interfaces/IDevelopers";

const mockedDeveloperModel = DeveloperModel as jest.Mocked<
  typeof DeveloperModel
>;

describe("Update a developer service", () => {
  const mocked: IDevelopers = {
    name: "Teste",
    age: 27,
    birthday: new Date("06/28/1993"),
    gender: "M",
    hobby: "Programar",
    id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  };

  beforeAll(() => {
    mockedDeveloperModel.getRepository = jest.fn().mockReturnValue({
      update: () => {},
      findOneOrFail: () => {
        return {
          ...mocked,
          hobby: "Jogar",
        };
      },
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("Should return a new developer", async () => {
    const returned = await UpdateDeveloper.execute(1, {
      name: "Teste",
      age: 27,
      birthday: new Date("06/28/1993"),
      gender: "M",
      hobby: "Jogar",
    });

    expect(returned).toStrictEqual({
      ...mocked,
      hobby: "Jogar",
    });
  });
});
