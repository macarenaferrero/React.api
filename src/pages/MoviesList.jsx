import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({listadoMovies}) => {


  return (
    <>

    <h1 className='title mb-5 mt-4'>Listado Peliculas</h1>
    <Link className='btn btn-secondary mb-5' to='/peliculas/create'>Crear Película</Link>


    <table className="table">
  <thead>
    <tr>
      <th scope="col">Título</th>
      <th scope="col">Género</th>
      <th scope="col">Año</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
      listadoMovies.map(movie => (
      <tr key={movie.id}>
        <th scope="row">{movie.title}</th>
        <td>{movie.genero}</td>
        <td>{movie.anio}</td>

        <td>
          <Link className='btn btn-primary' to={`/peliculas/${movie.id}`}>Ver</Link>
          <Link className='btn btn-warning' to={`/peliculas/edit/${movie.id}`}>Editar</Link>
          <Link className='btn btn-danger' to={`/peliculas/eliminar/${movie.id}`}>Eliminar</Link>
        </td>
    </tr>
      ))
    }

  </tbody>
</table>
    </>
  )
}

export default MoviesList