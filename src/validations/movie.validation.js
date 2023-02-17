import * as yup from "yup";

export const movieValidation = yup.object({
    title: yup.string().required(),
    duration: yup.string().required(),
    release_date: yup.string().required()
});