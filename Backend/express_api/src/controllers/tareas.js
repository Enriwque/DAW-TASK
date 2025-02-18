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
    if (Number.isNaN(parseInt(req.params.id))) {
        return res.status(400).send({ error: `${req.params.id} no es un ID válido` });
    } else {
        const index = tareas.findIndex(tarea => tarea.id === parseInt(req.params.id));
        if (index !== -1) {
            tareas.splice(index, 1);
            res.send({ message: `Tarea ${req.params.id} eliminada!` });
        } else {
            res.status(404).send({ error: "Tarea no encontrada" });
        }
    }
    
}

export { fetchTareas, posTareas, deleteTareas };