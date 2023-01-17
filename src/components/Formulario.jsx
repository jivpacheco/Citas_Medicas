import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({pacientes, setPacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const[error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Al menos hay un campo vacio')
      setError(true)
    } else {
      setError(false)
      //objeto de paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }
      


      setPacientes([...pacientes, objetoPaciente])
      //console.log('Formulario completo...')
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
        <Error/>
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
          value='Agregar Paciente'
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