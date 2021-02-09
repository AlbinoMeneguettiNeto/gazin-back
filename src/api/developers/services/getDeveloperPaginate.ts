import { Like } from "typeorm";
import DeveloperModel from "@models/developers";
import IPaginate from "@api/developers/interfaces/IPaginate";

export default class GetAllDevelopers {
  static async execute(
    take: number,
    skip: number,
    keyword: string = ''
  ): Promise<IPaginate> {
    const developerRepository = DeveloperModel.getRepository();

    const [result, total] = await developerRepository.findAndCount({
      where: { name: Like("%" + keyword + "%") },
      order: { name: "DESC" },
      take,
      skip,
    });

    return {
      data: result,
      count: total,
    };
  };
};
