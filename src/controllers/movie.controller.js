import { movieValidation } from "../validations/movie.validation";
import { createMovie, deleteMovie, getAll, getById, uptadeMovie } from "../repositorys/movie.repository";

export const create = async (req, res) => {
    try {
        await movieValidation.validate(req.body);

        const movie = await createMovie(req.body)
        res.status(200).send(movie)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const get = async (req, res) => {
    try {
        const movies = await getAll();
        res.status(200).send(movies);
    } catch (e) {
        res.status(400).send(e)
    }
}

export const getId = async (req, res) => {
    try {
        const movie = await getById(Number(req.params.id))
        res.status(200).send(movie);
    } catch (e) {
        res.status(400).send(e)
    }
}

export const update = async (req, res) => {
    try {
        const movie = await uptadeMovie(Number(req.params.id), req.body)
        res.status(200).send(movie);
    } catch (e) {
        res.status(400).send(e)
    }
}

export const remove = async (req, res) => {
    try {
        await deleteMovie(Number(req.params.id))
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e)
    }
}