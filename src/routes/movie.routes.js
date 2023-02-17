import { create, get, getId, update, remove } from "../controllers/movie.controller";

const movieRoutes = app => {
    app.post("/movie", create);
    app.get("/movie", get);
    app.get("/movie/:id", getId);
    app.put("/movie/:id", update);
    app.delete("/movie/:id", remove);
}
export default movieRoutes;