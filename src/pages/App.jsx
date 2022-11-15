import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './App.css'
import MovieCreate from './MovieCreate'
import MovieDetails from './MovieDetails'
import MovieEdit from './MovieEdit'
import MoviesList from './MoviesList'
import RutaNoValida from './RutaNoValida'

function App() {
  const [count, setCount] = useState(0)

  const[listadoMovies, setListadoMovies] = useState([])

  console.log(listadoMovies)
  const apiEndPoint = 'http://localhost:3000/peliculas/'

  useEffect(() =>{
    const getMovies = async () => {
      const {data: pelis} = await axios.get(apiEndPoint)
      setListadoMovies(pelis)
    }
    getMovies()
  }, [])

  return (    
    <BrowserRouter>
    <div className='App'>
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Routes>
              <Route path="/" element={<MoviesList listadoMovies={listadoMovies}/>}/>
              <Route path="/peliculas/edit/:id" element={<MovieEdit/>}/>
              <Route path="/peliculas/create" element={<MovieCreate setListadoMovies={setListadoMovies} listadoMovies={listadoMovies} apiEndPoint={apiEndPoint}/>}/>
              <Route path="/peliculas/:id" element={<MovieDetails apiEndPoint={apiEndPoint}/>}/>
              <Route path="*" element={<RutaNoValida/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
