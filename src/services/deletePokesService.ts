import { getRepository } from "typeorm"
import { Pokes } from "../entities/Pokes"


export class DeletePokesService {
    async execute(id: string) {
        const repo = getRepository(Pokes);

        if(!(await repo.findOne(id))) {
            return new Error ("Poke does not exist");
        }

        await repo.delete(id);
    }
}