import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
//antes del return es util para crear funciones, validaciones

  return (
    //esto es lo que se va a mostrar en pantalla y no se puede incluir if ni funciones, solo expresiones o ternarios
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
