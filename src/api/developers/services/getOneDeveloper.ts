import DeveloperModel from '@models/developers';

export default class GetAllDevelopers {
  static async execute(id: number): Promise<DeveloperModel[]> {
    const developer = await DeveloperModel.find({id});

    if (developer.length < 1) {
      throw new Error('No developer found.');
    }
    
    return developer;
  }
}