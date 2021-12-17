import { Request, Response } from "express";
import { CreatePokesService } from "../services/createPokesService";


export class CreatePokeController {
    async handle(request: Request, response: Response) {
        const { name, height, weight } = request.body

        const service = new CreatePokesService();

        const result = await service.execute({ name, height, weight })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)

    }
}