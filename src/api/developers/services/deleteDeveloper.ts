import DeveloperModel from '@models/developers';

export default class GetAllDevelopers {
  static async execute(id: number): Promise<void> {
    const developerRepository = DeveloperModel.getRepository();

    await developerRepository.findOneOrFail(id);
    
    await developerRepository.delete({id}); 
  }
}