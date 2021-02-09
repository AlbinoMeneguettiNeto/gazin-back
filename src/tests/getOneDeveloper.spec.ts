import getOneDeveloper from '@api/developers/services/getOneDeveloper';
import DeveloperModel from '@models/developers';
import IDevelopers from '@api/developers/interfaces/IDevelopers';


describe('Get all developers service', () => {
  const mocked: IDevelopers = {
    id: 1,
    name: 'Teste',
    age: 27,
    birthday: new Date('06/28/1993'),
    gender: 'M',
    hobby: 'Programar',
    created_at: new Date(),
    updated_at: new Date()
  }
  
  beforeAll(() => {
    DeveloperModel.find = jest.fn().mockImplementationOnce(() => (mocked));
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('Should return all developers registered', async () => {
    expect(await getOneDeveloper.execute(1)).toStrictEqual(mocked)
  });
});