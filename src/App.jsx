import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //antes del return es util para crear funciones, validaciones}
  // se crean la variable para almacenar en un arreglo los pacientes que se vayan ingresando en el formulario
  const [pacientes, setPacientes] = useState([]);

  const toma1Valor = (valor) =>{
    console.log(valor)

  }
 


  return (
    //esto es lo que se va a mostrar en pantalla y no se puede incluir if ni funciones, solo expresiones o ternarios
    <div className="container mx-auto mt-20">
      <Header
       toma1Valor = {toma1Valor}
      />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
