import { getRepository } from "typeorm"
import { Pokes } from "../entities/Pokes"

export class GetAllPokesService{
    async execute(){
        const repo = getRepository(Pokes)

        const pokes = await repo.find()

        return pokes
    }
}