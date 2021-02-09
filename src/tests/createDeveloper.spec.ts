import CreateDeveloper from '@api/developers/services/createDeveloper';
import DeveloperModel from '@models/developers';
import IDevelopers from '@api/developers/interfaces/IDevelopers';

const mockedDeveloperModel = (DeveloperModel as jest.Mocked<typeof DeveloperModel>);

describe('create new developer service', () => {

  const mocked: IDevelopers | any = {
    name: 'Teste',
    age: 27,
    birthday: new Date('06/28/1993'),
    gender: 'M',
    hobby: 'Programar',
    id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    save: () => {}
  }

  beforeAll(() => {
    mockedDeveloperModel.create = jest.fn().mockReturnValue(mocked);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  
  test('Should return a new developer', async () => {
    const returned = await CreateDeveloper.execute({
      name: 'Teste',
      age: 27,
      birthday: new Date('06/28/1993'),
      gender: 'M',
      hobby: 'Programar',
    });

    expect(returned).toStrictEqual(mocked);
  });
});
