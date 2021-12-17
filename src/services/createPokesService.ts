import { getRepository } from "typeorm"
import { Pokes } from "../entities/Pokes"

type pokeRequest = {
    name: string;
    height: string;
    weight: string;
}

export class CreatePokesService {
    async execute({name, height, weight}: pokeRequest): Promise<Pokes | Error> {
        const repo = getRepository(Pokes);

        if(await repo.findOne({name})){
            return new Error('Poke name already exists');
        }

        const pokes = repo.create({
            name,
            height,
            weight
        })

        await repo.save(pokes)

        return pokes
    }
}