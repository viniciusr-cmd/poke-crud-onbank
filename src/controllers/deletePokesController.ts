import { Request, Response } from 'express';
import { DeletePokesService } from '../services/deletePokesService'

export class DeletePokesController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeletePokesService()

        const result = await service.execute(id)

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }
        return response.status(204).end()
    }
}