import React from 'react'
import { useNavigate } from 'react-router'

const MovieEdit = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log("Detuve el comportamiento")
      navigate("/")
  }

  return (
    <>
    <h1>Editar Película</h1>

    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <label htmlFor='title' className="form-label">Titulo</label>
        <input type="text" className="form-control" id="title" placeholder="Ingrese el título de la película"></input>
    </div>
    <div className="mb-3">
        <label htmlFor='genero' className="form-label">Genero</label>
        <input type="text" className="form-control" id="genero" placeholder="Ingrese el genero de la película"></input>
    </div>
    <div className="mb-3">
        <label htmlFor='anio' className="form-label">Titulo</label>
        <input type="number" className="form-control" id="anio" placeholder="Ingrese el año de la película"></input>
    </div>

    <button className ='btn btn-success'>Editar película</button>
    </form>
    </>
  )
}

export default MovieEdit