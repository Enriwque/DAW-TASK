import { tareas, Tareas } from "../models/tareas.js";

async function fetchTareas(req, res) {
    res.send(await tareas());
}

async function posTareas(req, res) {
    const newTarea = {
        id: await Tareas.countDocuments() + 1,
        tarea: req.body.tarea, // Accede a la propiedad 'tarea' del cuerpo de la solicitud
        hecho: false
    }

    const tarea = new Tareas(newTarea);
    tarea.save();
    res.status(201).send(newTarea);
}

async function deleteTareas(req, res) {
    await Tareas.deleteOne({ id: parseInt(req.params.id) });
    res.send({ message: `Tarea ${req.params.id} eliminada!` });
}

export { fetchTareas, posTareas, deleteTareas };