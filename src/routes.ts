import { Router } from "express"
import { CreatePokeController } from "./controllers/createPokeController"
import { GetAllPokesController } from "./controllers/getAllPokeController"
import { DeletePokesController } from "./controllers/deletePokesController"
import { UpdatePokeController } from "./controllers/updatePokeController"

const routes = Router()

routes.get("/pokes", new GetAllPokesController().handle)
routes.post("/pokes", new CreatePokeController().handle)
routes.delete("/pokes/:id", new DeletePokesController().handle)
routes.put("/pokes/:id", new UpdatePokeController().handle)

export { routes }