import { getRepository } from "typeorm"
import { Pokes } from "../entities/Pokes"

type PokesUpdateRequest = {
    id: string,
    name: string,
    height: string,
    weight: string
}

export class UpdatePokesService {
    async execute({ id, name, height, weight }: PokesUpdateRequest) {
        const repo = getRepository(Pokes)

        const pokes = await repo.findOne(id)

        if(!pokes){
            return new Error("Poke does not exist")
        }

        pokes.name = name ? name : pokes.name
        pokes.height = height ? height : pokes.height
        pokes.weight = weight ? weight : pokes.weight

        await repo.save(pokes)

        return pokes
    }
}