import './App.css'
import { Cabecera } from './app/componentes/contenedor/Cabecera'
import {Ruteo} from './app/utilidades/rutas/Ruteo'
 
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Cabecera/>

        <Ruteo/>
      </BrowserRouter>
    </>
  )
}

export default App
