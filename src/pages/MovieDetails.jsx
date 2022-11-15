import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const MovieDetails = ({apiEndPoint}) => {

  const {id} = useParams()
  const [pelicula, setPelicula] = useState({})

  // const indicePeliculaBuscada = listadoMovies.findIndex((movie) => movie.id == id)
  // console.log(listadoMovies[indicePeliculaBuscada])
  // const {title, genero, anio} = listadoMovies[indicePeliculaBuscada]

  useEffect(() =>{
    const getMovie = async () => {
      const {data: peli} = await axios.get(apiEndPoint + id)
      setPelicula(peli)
    }
    getMovie()
  }, [])

  const {title, genero, anio} = pelicula

  return (
    <>
  <div>Pelicula {id}</div>

    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{genero}</p>
    <p className="card-text">{anio}</p>
  </div>
</div>
    </>
  )
}

export default MovieDetails