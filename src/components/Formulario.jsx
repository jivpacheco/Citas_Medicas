import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');


  useEffect(() => {

    if (Object.keys(paciente).length > 0) {

      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])



  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(24)
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Al menos hay un campo vacio')
      setError(true)
    } else {
      setError(false)
      //se crear el objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }
      // se verifica si es adicion o modificacion
      if (paciente.id) {
        //Editando Registro
        objetoPaciente.id = paciente.id
        // itera para validar el usuario y actualizarlos
        // paciente corresponde a la lista de pacientes
        
        const pacientesActualizados = pacientes.map(pacienteState =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        )

        setPacientes(pacientesActualizados)

        // vaciar el useState de paciente, se le pasa un objeto vacio
        setPaciente({})



      } else {
        //Nuevo Registro
        //id: generarId()
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
        //console.log('Formulario completo...')
      }




      // reiniciar el form
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-sm rounded-lg py-10 px-5 mb-10'>

        {error &&
          <Error>
            <h1>Jivpacheco dice:</h1>
            <p> Todos los campos son Obligatorios </p>
          </Error>
          // lo anterior se aplica el metodo children
          /* enviar la informacion al hijo en Props
          error && <Error mensaje='Todos los campos son Obligatorios'/>
          /*<div className="bg-red-800 text-white text-center text-bold p-3 mb-3 uppercase rounded-md">
             <p> Todos los campos son Obligatorios </p>
          </div>*/
        }

        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'> Nombre de Mascota</label>
          <input type="text"
            id='mascota'
            placeholder='Nombre de la mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'> Nombre del Propietario</label>
          <input type="text"
            id='propietario'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'> Email</label>
          <input type="email"
            id='email'
            placeholder='Email Contacto Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'> Alta</label>
          <input type="date"
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'> Sintomas </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describa los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>

  )
}

export default Formulario


/*
function Formulario() {
  return (
    <div className="w-1/2">
      <h2>Formulario</h2>
    </div>
  )
}

export default Formulario */