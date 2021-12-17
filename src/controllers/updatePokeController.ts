import { Request, Response } from 'express';
import { UpdatePokesService } from '../services/updatePokesService';

export class UpdatePokeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const { name, height, weight } = request.body

        const service = new UpdatePokesService()

        const result = await service.execute({id, name, height, weight})

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}