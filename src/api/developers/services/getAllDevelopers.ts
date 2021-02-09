import DeveloperModel from '@models/developers';

export default class GetAllDevelopers {
  static execute(): Promise<DeveloperModel[]> {
    return DeveloperModel.find();
  }
}