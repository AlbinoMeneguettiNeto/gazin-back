import GetDeveloperPaginate from "@api/developers/services/getDeveloperPaginate";
import DeveloperModel from "@models/developers";
import IPaginate from "@api/developers/interfaces/IPaginate";

const mockedDeveloperModel = DeveloperModel as jest.Mocked<
  typeof DeveloperModel
>;

describe("Get developer pagination service", () => {
  const mocked: IPaginate = {
    data: [
      {
        id: 1,
        name: "Teste",
        age: 27,
        birthday: new Date("06/28/1993"),
        gender: "M",
        hobby: "Programar",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    count: 1,
  };

  beforeAll(() => {
    mockedDeveloperModel.getRepository = jest.fn().mockReturnValue({
      findAndCount: () => {
        return [
          mocked.data,
          1
        ];
      },
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("Should return all developers registered with pagination", async () => {
    expect(await GetDeveloperPaginate.execute(10, 0)).toStrictEqual(mocked);
  });
});
