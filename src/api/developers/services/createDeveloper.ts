import DeveloperModel from '@models/developers';
import IDevelopers from '@api/developers/interfaces/IDevelopers';

export default class CreateDeveloper {
  static async execute(developer: IDevelopers) {
    const newDeveloper = DeveloperModel.create(developer);
    await newDeveloper.save();

    return newDeveloper;
  }
}