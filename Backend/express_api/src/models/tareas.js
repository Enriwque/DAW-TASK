import mongoose from 'mongoose'
const { Schema } = mongoose

mongoose.connect('mongodb+srv://enrique:1234@cluster0.hzl2s.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const tareasSchema = new Schema({
    id: Number,
    tarea: String,
    hecho: Boolean,
})

export const Tareas = mongoose.model('Tareas', tareasSchema)

// const tasks = [ 
//     {id: 1, tarea: 'lavar los platos', hecho: false},
//          {id: 2, tarea: 'avanzar tfg', hecho: false},
//          {id: 3, tarea: 'sacar al perro', hecho: true},
//          {id: 4, tarea: 'Bailar la macarena', hecho: true},
//          {id: 5, tarea: 'tender la ropa', hecho: true},
//         ]

//     tasks.forEach(tarea => {
//         const task = new Tareas(tarea)
//         task.save()
//     })

export const tareas = async function () {
    const results = [];
    for (let i = 0; i < await Tareas.countDocuments()+1; i++){
        const tarea = await Tareas.findOne({id: i})
        results.push(tarea)
    }
    return results
}