import { prisma } from "../services/prisma";

export const createMovie = async (data) => {
    const movie = await prisma.movie.create({
        data,

    })
    return movie;
}

export const getAll = async () => {
    const movies = await prisma.movie.findMany({
        select: {
            id: true,
            title: true,
            duration: true,
            release_date: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return movies;
}

export const getById = async (id) => {
    const movie = await prisma.movie.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            title: true,
            duration: true,
            release_date: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return movie;
}

export const uptadeMovie = async (id, data) => {
    const movie = await prisma.movie.update({
        where: {
            id,
        },
        data,
        select: {
            id: true,
            title: true,
            duration: true,
            release_date: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return movie;
}

export const deleteMovie = async (id) => {
    await prisma.movie.delete({
        where: {
            id,
        }
    })
    return;
}