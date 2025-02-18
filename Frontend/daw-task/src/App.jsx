import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const handleGet = async () => {
    try {
      const response = await fetch('https://daw-task.onrender.com/api/v1/tareas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handlePost = async () => {
    const tarea = prompt('Ingrese la tarea:')
    try {
      const response = await fetch('https://daw-task.onrender.com/api/v1/tareas/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tarea })
      })
      const result = await response.json()
      console.log('Post result:', result)
      alert('Tarea creada')
    } catch (error) {
      console.error('Error posting data:', error)
      alert('Error al crear la tarea')
    }
  }

  const handleDelete = async () => {
    const id = prompt('Ingrese el ID de la tarea a eliminar:')
    if (!id) {
      alert('ID no proporcionado')
      return
    }
    try {
      const response = await fetch(`https://daw-task.onrender.com/api/v1/tareas/delete${id}`, {
        method: 'DELETE'
      })
      const result = await response.json()
      console.log('Delete result:', result)
      alert(result.message)
    } catch (error) {
      console.error('Error deleting data:', error)
      alert('Error al eliminar la tarea')
    }
  }

  return (
    <>
      <h1>prueba de conexión con API REST</h1>
      <div className='buttons'>
        <button className='get' onClick={handleGet}>get</button>
        <button className='post' onClick={handlePost}>post</button>
        <button className='delete' onClick={handleDelete}>delete</button>
      </div>
      <div className='data'>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  )
}

export default App