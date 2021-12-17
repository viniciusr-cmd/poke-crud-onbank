import { Request, Response } from 'express';
import { GetAllPokesService } from '../services/getAllPokesService';

export class GetAllPokesController {
    async handle(request: Request, response: Response) {
        const service = new GetAllPokesService()

        const pokes = await service.execute()

        return response.json(pokes);
    }
}