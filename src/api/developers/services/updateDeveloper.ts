import DeveloperModel from '@models/developers';
import IDevelopers from '@api/developers/interfaces/IDevelopers';

export default class CreateDeveloper {
  static async execute(developerId: number, developer: IDevelopers) {
    const developerRepository = DeveloperModel.getRepository();
    await developerRepository.update(developerId, developer);

    const newDeveloper = await developerRepository.findOneOrFail(developerId);

    return newDeveloper;
  }
}