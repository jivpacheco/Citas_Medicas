import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  //antes del return es util para crear funciones, validaciones}
  // se crean la variable para almacenar en un arreglo los pacientes que se vayan ingresando en el formulario
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})
  /* const valorDesdeHeader = (valor) =>{
    console.log(valor)
  }*/

  // funcion para eliminar paciente
  const eliminarPaciente = (id) =>{
   const pacientesActualizados = pacientes.filter(paciente => paciente.id !==id);

   console.log(pacientesActualizados)
   setPacientes(pacientesActualizados)
  }

  return (
    //esto es lo que se va a mostrar en pantalla y no se puede incluir if ni funciones, solo expresiones o ternarios
    <div className="container mx-auto mt-20">
      <Header
       // valorDesdeHeader={valorDesdeHeader}
      />
      <div className="mt-12 md:flex">
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <ListadoPacientes 
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
