import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from '../hooks/useForm'

const MovieCreate = ({apiEndPoint, setListadoMovies, listadoMovies}) => {

    const navigate = useNavigate()

    const [values, handleInputChange] = useForm({
        title: '',
        genero: '',
        anio: ''
    })

    
    const {title, genero, anio} = values


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data: objetoCreado} = await axios.post(apiEndPoint, values)
        const arrayNuevo = ([...listadoMovies, objetoCreado])
        setListadoMovies(arrayNuevo)
        console.log("Detuve el comportamiento")
        navigate("/")
    }

  return (
    <>
    <h1>Crear Película</h1>

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor='title' className="form-label">Título</label>
<input
      type="text"
      className="form-control"
      id="title"
      name='title'
      value={title}
      onChange={handleInputChange}
      placeholder="Ingrese el título de la película"></input>    </div>
    <div className="mb-3">
        <label htmlFor='genero' className="form-label">Género</label>
<input
      type="text"
      className="form-control"
      id="genero"
      name='genero'
      value={genero}
      onChange={handleInputChange}
      placeholder="Ingrese el genero de la película"></input>    </div>
    <div className="mb-3">
        <label htmlFor='anio' className="form-label">Año</label>
<input
      type="number"
      className="form-control"
      id="anio"
      name='anio'
      value={anio}
      onChange={handleInputChange}
      placeholder="Ingrese el año de la película"></input>    </div>

    <button className='btn btn-success'>Crear película</button>
    </form>
    </>
  )
}

export default MovieCreate