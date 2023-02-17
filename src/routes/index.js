import movieRoutes from "./movie.routes";
import userRoutes from "./user.routes";

export const routes = app => {
    userRoutes(app)
    movieRoutes(app)
}
export default routes;