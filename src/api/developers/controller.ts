import { Request, Response } from "express";
import GetAllDevelopers from "@api/developers/services/getAllDevelopers";
import CreateDeveloper from "@api/developers/services/createDeveloper";
import GetOneDeveloper from "@api/developers/services/getOneDeveloper";
import UpdateDeveloper from "@api/developers/services/updateDeveloper";
import GetDeveloperPaginate from "@api/developers/services/getDeveloperPaginate";
import DeleteDeveloper from "@api/developers/services/deleteDeveloper";

class DeveloperController {
  static async index(request: Request, response: Response): Promise<Response> {
    if (request.query) {
      const { page, limit, keyword } = request.query;
      try {
        const paginate = await GetDeveloperPaginate.execute(
          (limit as unknown) as number,
          (page as unknown) as number,
          (keyword as unknown) as string
        );

        return response.status(200).json(paginate);
      } catch (error) {
        return response.status(404).json();
      }
    }
    const developers = await GetAllDevelopers.execute();

    return response.json(developers);
  }

  static async create(request: Request, response: Response): Promise<Response> {
    const { name, gender, age, hobby, birthday } = request.body;

    try {
      const created = await CreateDeveloper.execute({
        name,
        gender,
        age,
        hobby,
        birthday,
      });

      return response.status(201).json(created);
    } catch (error) {
      return response.status(400).json({ Error: "Couldn't create a new user" });
    }
  }

  static async findOne(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { developerId } = request.params;
    try {
      const developer = await GetOneDeveloper.execute(
        (developerId as unknown) as number
      );
      return response.status(200).json(developer);
    } catch (error) {
      return response.status(404).json({ Error: error.message });
    }
  }

  static async update(request: Request, response: Response): Promise<Response> {
    const { developerId } = request.params;
    const { name, gender, age, hobby, birthday } = request.body;

    try {
      const updated = await UpdateDeveloper.execute(
        (developerId as unknown) as number,
        {
          name,
          gender,
          age,
          hobby,
          birthday,
        }
      );
      return response.status(200).json(updated);
    } catch (error) {
      response.status(400).json({ Error: error.message });
    }
  }

  static async delete(request: Request, response: Response): Promise<Response> {
    const { developerId } = request.params;

    try {
      await DeleteDeveloper.execute((developerId as unknown) as number);

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({Error: 'Couldn\'t delete user'});
    }
  }
}

export default DeveloperController;
